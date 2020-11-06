import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Tabs } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

import { UserCard } from '../../components/user-card';
import { getSingleUserData } from '../user/userActions';
import './UserDetail.css';

const { TabPane } = Tabs;

const connector = connect(
  ({ user }) => {
    return { singleUserData: user.singleUserData };
  },
  { getSingleUserData }
);

type UserDetailProps = ConnectedProps<typeof connector>;

const UserDetail: React.FC<UserDetailProps> = ({
  singleUserData,
  getSingleUserData,
  match: {
    params: { key: userKey }
  }
}) => {
  useEffect(() => {
    getSingleUserData(userKey);
  }, []);

  const detailList = Object.keys(singleUserData).map(k => {
    const v = Array.isArray(singleUserData[k]) ? singleUserData[k].join(', ') : singleUserData[k];
    return { key: k, value: v };
  });

  const tabContent = (
    <div className="mfd-detail-cards-container">
      <div className="mfd-detail-cards-wrapper">
        <UserCard title="user detail 1" list={detailList} />
        <UserCard title="user detail 2" list={detailList} />
      </div>
      <div className="mfd-detail-cards-wrapper">
        <UserCard title="user detail 3" list={detailList} />
        <div />
      </div>
    </div>
  );

  return (
    <div className="mfd-detail-container">
      <div className="mfd-detail-header">
        <div className="mfd-detail-header-text">User Detail</div>
        <div className="mfd-detail-header-icons">
          <LikeOutlined title="Like this person?" style={{ color: '#1890FF', fontSize: '18px' }} />
        </div>
      </div>
      <div className="mfd-detail-content">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic Info" key="1">
            {tabContent}
          </TabPane>
          <TabPane tab="Education" key="2">
            {tabContent}
          </TabPane>
          <TabPane tab="Career" key="3">
            {tabContent}
          </TabPane>
          <TabPane tab="Hobby" key="4">
            {tabContent}
          </TabPane>
          <TabPane tab="Skills" key="5">
            {tabContent}
          </TabPane>
          <TabPane tab="Health" key="6">
            {tabContent}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default connect(
  ({ user }) => {
    return { singleUserData: user.singleUserData };
  },
  { getSingleUserData }
)(UserDetail);
