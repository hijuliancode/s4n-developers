import React from 'react'
import styled from 'styled-components'

import Skeleton from '../../shared/skeleton'

import { Avatar, Row, Form, Col, Button, Input } from 'antd'
import {
  ExportOutlined,
  IdcardOutlined,
  MailOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined
} from '@ant-design/icons'

const { TextArea } = Input;

const DetailElm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const AreaAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: calc(${props => props.theme.baseSize} * 2px);
  width: 100%;
`
const UserTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: calc(${props => props.theme.baseSize} * 8px);
  
  h3 { margin-bottom: ${props => props.theme.baseSize}px; }
  p { margin-bottom: calc(${props => props.theme.baseSize} * 2px); }
`
const ColFeature = styled(Col)`
  text-align: center;
  small { display: block; }
`
const Icon = styled.span`
  display: inline-block;
  font-size: 16px;
  margin-right: calc(${props => props.theme.baseSize} * 1px);
`
const LinkBio = styled.span`
  display: inline-block;
  margin-left: calc(${props => props.theme.baseSize} * 2px);
`
const CommentBox = styled.div`
  padding-top: calc(${props => props.theme.baseSize} * 4px);
`

const DetailComponent = ({candidate}) => {
  return (
    <DetailElm>
      {(candidate) ? (
        <>
          <AreaAvatar>
            <Avatar src={candidate.github_data.avatar_url} size={140} />
          </AreaAvatar>
          <UserTitle>
            <h3>{candidate.full_name}</h3>
            <p>
              {candidate.github_data.bio}
              <LinkBio>
                <a href={candidate.github_data.blog} target="_blank">
                  <ExportOutlined />
                </a>
              </LinkBio>
            </p>
            <Row gutter={12}>
              <ColFeature span={8}>
                <Icon><UsergroupAddOutlined /></Icon>
                {candidate.github_data.followers} <small>Followers</small>
              </ColFeature>
              <ColFeature span={8}>
                <Icon><UserSwitchOutlined /></Icon>
                {candidate.github_data.following} <small>Following</small>
              </ColFeature>
              <ColFeature span={8}>
                <Icon><UserSwitchOutlined /></Icon>
                {candidate.github_data.public_repos} <small>Repos</small>
              </ColFeature>
            </Row>
          </UserTitle>
          <Row gutter={8}>
            <Col span={24}>
              <Icon><UserOutlined /></Icon> {candidate.github_username}
            </Col>
            <Col span={24}>
              <Icon><MailOutlined /></Icon> {candidate.email}
            </Col>
            <Col span={24}>
              <Icon><IdcardOutlined /></Icon> {candidate.id_number}
            </Col>
          </Row>
          <CommentBox>
            <Form.Item>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Add Comment
              </Button>
            </Form.Item>
          </CommentBox>
        </>
      ) : (
        <Skeleton />
      )}
    </DetailElm>
  )
}
 
export default DetailComponent;