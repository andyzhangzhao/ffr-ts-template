import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Table, Divider, Tag, Button, Modal } from 'antd';
import { UserCard, Props as UserCardProps } from '../../components/user-card';
import { User as UserType } from '../../common/types';
import { getUserData as getUserDataAction } from './userActions';
import { RootState } from '../../common/store';
import './User.css';

const connector = connect(
  (state: RootState) => {
    return { userData: state.user.userData };
  },
  { getUserData: getUserDataAction }
);

type UserProps = ConnectedProps<typeof connector>;

const User: React.FC<UserProps> = ({ userData, getUserData }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Button type="link">
          <Link to={`/user/${record.key}`}>{text}</Link>
        </Button>
      )
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button
            type="link"
            onClick={() => {
              popCard(record);
            }}
          >
            Invite&nbsp;
            {record.name}
          </Button>
          <Divider type="vertical" />
          <Button type="link">Delete</Button>
        </span>
      )
    }
  ];

  const [showCard, setShowCard] = useState(false);
  const [popingUser, setPopingUser] = useState<UserCardProps['list']>([]);

  const popCard = (user: UserType) => {
    setPopingUser(
      Object.keys(user).map(k => {
        const v = Array.isArray(user[k]) ? user[k].join(', ') : user[k];
        return { key: k, value: v };
      })
    );
    setShowCard(true);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="mfd-container">
      <div className="mfd-title-section">
        <div>
          <div className="mfd-title">{<FormattedMessage id="invitations" defaultMessage="Invitations" />}</div>
          <div className="mfd-subtitle">
            {<FormattedMessage id="invite-colleague-to-team" defaultMessage="invite colleague to your team" />}
          </div>
        </div>
        <Button type="primary">{<FormattedMessage id="add-person" defaultMessage="Add Person" />}</Button>
        <Button type="primary">{<FormattedMessage id="check-date" defaultMessage="Check Date" />}</Button>
      </div>
      <Table columns={columns} dataSource={userData} pagination={{ showTotal: total => `Total: ${total}` }} />

      <Modal
        visible={showCard}
        onOk={() => {
          setShowCard(false);
        }}
        onCancel={() => {
          setShowCard(false);
        }}
      >
        <UserCard title="user info" list={popingUser} />
      </Modal>
    </div>
  );
};

export default connector(User);
