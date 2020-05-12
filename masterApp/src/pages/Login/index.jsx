import { FieldForm } from '@/components';
import { Form, Button, Row, Col, Icon, Radio, Input, message } from 'antd';
import LoginLayout from '@/layouts/LoginLayout';
import './index.module.less';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.fields = [
            { type: 'input', id: 'username', className: 'input-form', value: '', prefix: <Icon type='user' />, placeholder: '请输入用户名' },
            { type: 'password', id: 'password', className: 'input-form', value: '', col: 24, prefix: <Icon type="lock" />, placeholder: '请输入密码' },
        ]
    }

    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) { return; }
            if (values.username === 'admin' && values.password === '123456') {
                this.props.history.push('/system');
            } else {
                message.error('用户名或密码错误');
            }
        })
    }

    handleKeyDown = (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    }

    render() {
        return (
            <LoginLayout>
                <Form className='login-wrap' onSubmit={this.handleSubmit}>
                    <h2 className="login-title">后台管理系统</h2>
                    <div className="input-wrap-form">
                        {
                            this.fields.map(item => {
                                const { col, ...rest } = item;
                                return (
                                    <Col span={item.col} key={item.id}>
                                        <FieldForm {...rest} form={this.props.form} />
                                    </Col>
                                )
                            })
                        }
                        <Button
                            type='primary' style={{ width: '100%' }}
                            htmlType='submit'
                            onClick={this.handleSubmit}
                        >登录</Button>
                    </div>
                </Form>
            </LoginLayout>
        )

    }
}

export default Form.create()(Login);