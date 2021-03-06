import { FieldForm } from '@/components';
import { Form, Button, Row, Col, Icon, Radio, Input, message } from 'antd';
import LoginLayout from '@/layouts/LoginLayout';
import React from 'react';
import styled from 'styled-components';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

function Login(props: { form: any; history: any }) {
  const { form, history } = props;
  const { getFieldDecorator } = form;
  const fields = [
    {
      type: 'input',
      id: 'username',
      name: '用户名',
      className: 'input-form',
      value: '',
      prefix: <Icon type='user' />,
      placeholder: '请输入用户名',
    },
    {
      type: 'password',
      id: 'password',
      name: '密码',
      className: 'input-form',
      value: '',
      col: 24,
      prefix: <Icon type='lock' />,
      placeholder: '请输入密码',
    },
  ];

  /**
   * @description 处理提交
   */
  function handleSubmit() {
    form.validateFieldsAndScroll(
      (err: any, values: { username: string; password: string }) => {
        if (err) {
          return;
        }
        if (values.username === 'admin' && values.password === '123456') {
          history.push('/system');
        } else {
          message.error('用户名或密码错误');
        }
      }
    );
  }

  return (
    <LoginLayout>
      <LoginFormWrap onSubmit={handleSubmit}>
        <LoginTitle>后台管理系统</LoginTitle>
        <InputWrapForm>
          {fields.map((item) => {
            const { col, ...rest } = item;
            return (
              <Col span={item.col} key={item.id}>
                {/* <FieldForm {...rest} form={form} /> */}
                <FormItem label={item.name} {...formItemLayout}>
                  {getFieldDecorator(item.id, {})(<Input type={item.type} />)}
                </FormItem>
              </Col>
            );
          })}
          <Button
            type='primary'
            style={{ width: '100%' }}
            htmlType='submit'
            onClick={handleSubmit}
          >
            登录
          </Button>
        </InputWrapForm>
      </LoginFormWrap>
    </LoginLayout>
  );
}

const LoginFormWrap = styled(Form)`
  position: absolute;
  top: 50%;
  right: 20%;
  width: 420px;
  height: 500px;
  margin-top: -250px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
`;

const LoginTitle = styled.h2`
  text-align: center;
  line-height: 2;
  font-size: 26px;
  margin: 100px auto 20px;
`;

const InputWrapForm = styled.div`
  max-width: 300px;
  margin: 0 auto 20px;
`;

export default Form.create()(Login);
