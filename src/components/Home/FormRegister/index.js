import React, { createRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'uuid/dist/v4'

import {
  Form,
  Input,
  Row,
  Col,
  Button,
  DatePicker,
  Divider,
} from 'antd'

import {
  MenuOutlined,
  DeleteOutlined
} from '@ant-design/icons'


const FormRegisterElm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
const Heading = styled.h1`
  /* font-size: 1.8rem; */
`
const Description = styled.p`
  /* font-size: 1rem; */
`
const DatePickerElm = styled(DatePicker)`
  width: 100%;
`
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  button {
    &:not(.btn-fluid) {
      width: 33%;
    }
    &:not(:last-child) {
      margin-right: calc(${props => props.theme.baseSize} * 4px);
    }
  }
`
const ViewCandidates = styled(Buttons)`
  padding-top: calc(${props => props.theme.baseSize} * 3px);
`
const IconCandidates = styled(MenuOutlined)`
  margin-right: calc(${props => props.theme.baseSize} * 2px);
`

const FormRegisterComponent = ({saveCandidate, setFlagCandidates, candidatesLenght}) => {
  const formRef = createRef();
  const [form] = Form.useForm();

  const onSubmit = (newCandidate) => {
    newCandidate.id = uuid()
    newCandidate.key = uuid()
    newCandidate.full_name = `${newCandidate.name} ${newCandidate.last_name}`
    saveCandidate(newCandidate)
    setFlagCandidates(true)
  };

  const onReset = () => {
    formRef.current.resetFields();
  };

  return (
    <FormRegisterElm>
      <Heading>Welcome to <strong>S4N Developers</strong></Heading>
      <Description>With S4N Developers, remote teams can organize projects, manage shifting priorities, and get work done.</Description> {/** Asana quote */}
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Register new developer
      </Divider>
      <Form
        form={form}
        layout='vertical'
        name="register"
        onFinish={onSubmit}
        ref={formRef}
        scrollToFirstError
        hideRequiredMark
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input a name!' }]}
            >
            <Input />
          </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="last_name"
              label="Last Name"
              rules={[{ required: true, message: 'Please input a last name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="id_card"
              label="Identification Card"
              rules={[{ required: true, message: 'Please input a Identification Card!' }]}
            >
            <Input />
          </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="birthday"
              label="Date of birth"
            >
              <DatePickerElm format="DD/MM/YYYY" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { type: 'email', message: 'The input is not valid E-mail!' },
                { required: true, message: 'Please input a E-mail!' }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="github_username"
              label="Github"
              autoComplete="off"
              rules={[ { required: true, message: 'Please input a Github!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Buttons>
          <Button
            htmlType="button"
            onClick={onReset}
            className="btn-fluid"
            >
            <DeleteOutlined />
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Buttons>
        {
          (candidatesLenght)
            ?
              <ViewCandidates>
                <Link to="/candidates" onClick={onReset}>
                  <IconCandidates />
                  See all candidates ({candidatesLenght})
                </Link>
              </ViewCandidates>
            : null
        }
      </Form>

    </FormRegisterElm>
  )
}
 
export default FormRegisterComponent;