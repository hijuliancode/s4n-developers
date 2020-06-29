import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Skeleton, Table, Tooltip } from 'antd'
import Column from 'antd/lib/table/Column'

import API_GITHUB from '../../../services/github.service'
import {
  EyeOutlined
} from '@ant-design/icons'

const RepositoriesElm = styled.div`
  height: 100%;
  .ant-table-wrapper,
  .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }
  .ant-spin-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .ant-table-pagination.ant-pagination {
    align-self: flex-end;
    margin-top: auto;
  }
`
const SkeletonElm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  width: 100%;
  @media screen and (${props => props.theme.mq.sm}) {
    padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 6}px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    padding: ${props => props.theme.baseSize * 8}px ${props => props.theme.baseSize * 8}px;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    padding: ${props => props.theme.baseSize * 10}px ${props => props.theme.baseSize * 10}px;
  }
`

const RepositoriesComponent = ({candidate}) => {
  const [dataSource, setdataSource] = useState([])
  const [flagDataSource, setflagDataSource] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(candidate) {
      if (flagDataSource) {
        setLoading(true)
        getRepositories(candidate.github_username)
          .then(repos => {
            setdataSource(repos.data)
            setLoading(false)
          })
        setflagDataSource(false)
      }
    }
  }, [candidate, dataSource, flagDataSource])

  const getRepositories = async (github_username) => {
    const data = await API_GITHUB.getRepos(github_username)
      .then(_resp => _resp)
      .catch(error => console.error('Error => ', error))
    return data
  }

  return (
    <RepositoriesElm>
      {(candidate) ? (
        <>
          <Table
            loading={loading}
            dataSource={dataSource}
            rowKey={record => record.id}
            size="middle"
            pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'], hideOnSinglePage: true}}
          >
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Language" dataIndex="language" key="language" />
            <Column title="Default Branch" dataIndex="default_branch" key="default_branch" />
            <Column title="Description" dataIndex="description" key="description" />
            <Column
              title=""
              dataIndex="html_url"
              key="html_url"
              render={html_url => (
                <Tooltip placement="top" title="View on Github">
                  <a href={`${html_url}`} target="_blank" rel="noopener noreferrer">
                    <EyeOutlined />
                  </a>
                </Tooltip>
              )}
            />
          </Table>
        </>
      ) : (
        <SkeletonElm>
          <Skeleton paragraph={{ rows: 12 }} />
        </SkeletonElm>
      )}
    </RepositoriesElm>
  )
}
 
export default RepositoriesComponent;