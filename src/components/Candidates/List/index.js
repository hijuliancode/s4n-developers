import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Table, Tooltip } from 'antd'
import {
  EyeOutlined
} from '@ant-design/icons'

const ListElm = styled.div``

const ListComponent = ({candidates}) => {
  const [dataSource, setdataSource] = useState([])
  const [flagDataSource, setflagDataSource] = useState(true)

  useEffect(() => {
    if (flagDataSource) {
      setdataSource(candidates)
      setflagDataSource(false)
    }
  }, [candidates, dataSource, flagDataSource])

  const columns = [
    {
      title: "Name",
      dataIndex: "full_name",
      key: "full_name",
      sorter: (a, b) => a.full_name.length - b.full_name.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: "Github",
      dataIndex: "github_username",
      key: "github_username",
      sorter: (a, b) => a.full_name.length - b.full_name.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.full_name.length - b.full_name.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: "Public Repos",
      dataIndex: "github_data",
      key: "public_repos", render: github_data => github_data.public_repos,
      sorter: (a, b) => a.full_name.length - b.full_name.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: "",
      dataIndex: "id",
      key: "id", render: (id) => (
        <Tooltip placement="top" title="View Profile">
          <Link to={`/candidates/${id}`}><EyeOutlined /></Link>
        </Tooltip>
      )
    },
  ]

  return (
    <ListElm>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={record => record.id}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'], hideOnSinglePage: true}}
      />
    </ListElm>
  )
}
 
export default ListComponent;