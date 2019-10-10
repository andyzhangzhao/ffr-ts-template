import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
registerRequireContextHook();
