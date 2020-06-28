import React, { useState, createRef } from 'react'
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
    width: 33%;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`

const FormRegisterComponent = ({getRepositories, saveCandidate}) => {
  const formRef = createRef();
  const [form] = Form.useForm();

  const onSubmit = newCandidate => {
    newCandidate.id = uuid()
    console.log('Received newCandidate of form: ', newCandidate)
    saveCandidate(newCandidate)
    // getRepositories(newCandidate.github)
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
              name="text"
              label="Last Name"
              rules={[{ required: true, message: 'Please input a last name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="id_document"
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
              <DatePickerElm />
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
              name="github"
              label="Github"
              autoComplete="off"
              rules={[ { required: true, message: 'Please input a Github!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        
        <Buttons>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Buttons>
      </Form>

    </FormRegisterElm>
  )
}
 
export default FormRegisterComponent;