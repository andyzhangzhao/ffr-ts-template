// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Ensure environment variables are read.
require("../config/env");

const fs = require("fs");
const path = require("path");
const chalk = require("react-dev-utils/chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const clearConsole = require("react-dev-utils/clearConsole");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const {
  choosePort,
  prepareUrls
} = require("react-dev-utils/WebpackDevServerUtils");
const compileUtil = require("@sf/ffr-core/es/scripts/compileUtils");
const openBrowser = require("react-dev-utils/openBrowser");
const paths = require("../config/paths");
const configFactory = require("../config/webpack.config");
const createDevServerConfig = require("../config/webpackDevServer.config");

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;
// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.APP_SERVICE_TEST_PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  );
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  );
  console.log(
    `Learn more here: ${chalk.yellow("https://bit.ly/CRA-advanced-config")}`
  );
  console.log();
}

function onProxyError(proxy) {
  return (err, req, res) => {
    const host = req.headers && req.headers.host;
    console.log(
      chalk.red("Proxy error:") +
        " Could not proxy request " +
        chalk.cyan(req.url) +
        " from " +
        chalk.cyan(host) +
        " to " +
        chalk.cyan(proxy) +
        "."
    );
    console.log(
      "See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (" +
        chalk.cyan(err.code) +
        ")."
    );
    console.log();

    // And immediately send the proper error response to the client.
    // Otherwise, the request will eventually timeout with ERR_EMPTY_RESPONSE on the client side.
    if (res.writeHead && !res.headersSent) {
      res.writeHead(500);
    }
    res.end(
      "Proxy error: Could not proxy request " +
        req.url +
        " from " +
        host +
        " to " +
        proxy +
        " (" +
        err.code +
        ")."
    );
  };
}

const prepareProxy = (proxy, appPublicFolder) => {
  if (proxy === undefined) {
    return undefined;
  }
  const sockPath = process.env.WDS_SOCKET_PATH || "/sockjs-node";
  const isDefaultSockHost = !process.env.WDS_SOCKET_HOST;

  // If proxy is specified, let it handle any request except for
  // files in the public folder and requests to the WebpackDevServer socket endpoint.
  const mayProxy = pathname => {
    const maybePublicPath = path.resolve(appPublicFolder);
    const isPublicFileRequest = fs.existsSync(maybePublicPath);
    // used by webpackHotDevClient
    const isWdsEndpointRequest =
      isDefaultSockHost && pathname.startsWith(sockPath);
    return !(isPublicFileRequest || isWdsEndpointRequest);
  };

  let target = null;
  let context = null;

  if (typeof proxy === "string") {
    target = proxy;
  } else if (typeof proxy === "object") {
    target = proxy.target;
    context = proxy.context;
  }

  if (context !== null && !Array.isArray(context)) {
    console.log(chalk.red("context must be Array"));
    process.exit(1);
  }

  return [
    {
      target,
      logLevel: "silent",
      context: function(pathname, req) {
        return (
          (context && context.some(route => pathname.startsWith(route))) ||
          req.method !== "GET" ||
          (mayProxy(pathname) &&
            req.headers.accept &&
            req.headers.accept.indexOf("text/html") === -1)
        );
      },
      onProxyReq: proxyReq => {
        // Browsers may send Origin headers even with same-origin
        // requests. To prevent CORS issues, we have to change
        // the Origin to match the target URL.
        if (proxyReq.getHeader("origin")) {
          proxyReq.setHeader("origin", target);
        }

        if (proxy.fakeToken !== false) {
          proxyReq.setHeader("DHUBTECHHEADER", "1HLI2V07VL296ER5HP8EPQCP50");
        }
      },
      onError: onProxyError(target),
      secure: false,
      changeOrigin: true,
      ws: true,
      xfwd: true
    }
  ];
};

// We require that you explicitly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require("react-dev-utils/browsersHelper");
checkBrowsers(paths.appPath, isInteractive)
  .then(() => {
    // We attempt to use the default port but if it is busy, we offer the user to
    // run on a different port. `choosePort()` Promise resolves to the next free port.
    return choosePort(HOST, DEFAULT_PORT);
  })
  .then(port => {
    if (port == null) {
      // We have not found a port.
      return;
    }
    const config = configFactory("development");
    const protocol = process.env.HTTPS === "true" ? "https" : "http";
    const appName = require(paths.appPackageJson).name;
    const useTypeScript = fs.existsSync(paths.appTsConfig);
    const urls = prepareUrls(protocol, HOST, port);
    const devSocket = {
      warnings: warnings =>
        devServer.sockWrite(devServer.sockets, "warnings", warnings),
      errors: errors => devServer.sockWrite(devServer.sockets, "errors", errors)
    };
    // Create a webpack compiler that is configured with custom messages.
    const compiler = compileUtil.createCompiler({
      appName,
      config,
      devSocket,
      urls,
      useYarn,
      useTypeScript,
      webpack
    });
    // Load proxy config
    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
    // Serve webpack assets generated by the compiler over a web server.
    const serverConfig = createDevServerConfig(
      proxyConfig,
      urls.lanUrlForConfig
    );
    const devServer = new WebpackDevServer(compiler, serverConfig);
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }

      // We used to support resolving modules according to `NODE_PATH`.
      // This now has been deprecated in favor of jsconfig/tsconfig.json
      // This lets you use absolute paths in imports inside large monorepos:
      if (process.env.NODE_PATH) {
        console.log(
          chalk.yellow(
            "Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app."
          )
        );
        console.log();
      }

      console.log(chalk.cyan("Starting the development server...\n"));
      openBrowser(urls.localUrlForBrowser);
    });

    ["SIGINT", "SIGTERM"].forEach(function(sig) {
      process.on(sig, function() {
        devServer.close();
        process.exit();
      });
    });
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
