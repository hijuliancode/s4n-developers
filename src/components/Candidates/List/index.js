import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Table, Tooltip } from 'antd'
import Column from 'antd/lib/table/Column'
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

  return (
    <ListElm>
      <Table
        dataSource={dataSource}
        rowKey={record => record.id}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'], hideOnSinglePage: true}}
      >
        <Column title="Name" dataIndex="full_name" key="full_name" />
        <Column title="Github" dataIndex="github_username" key="github_username" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Public Repos" dataIndex="github_data" key="public_repos" render={github_data => github_data.public_repos} />
        <Column
          title=""
          dataIndex="key"
          key="key"
          render={key => (
            <Tooltip placement="top" title="View Profile">
              <Link to={`/candidates/${key}`}><EyeOutlined /></Link>
            </Tooltip>
          )}
        />
      </Table>
    </ListElm>
  )
}
 
export default ListComponent;