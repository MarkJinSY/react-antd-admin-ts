import { FormInstance, Form, Input, Button, Space, message } from 'antd';
import { type } from 'os';
import React, {Component, createRef, RefObject} from 'react';
import '../../static/css/login.css';
import { set } from '../../utils/storage';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  

class Login extends Component {
    formRef: RefObject<FormInstance>

    constructor(props: any, context: any) {
        super(props, context);
        this.formRef = createRef<FormInstance>()
    }

    login = (form: any) => {
        login(form.name, form.password).then(response => {
            const {code, msg, data} = response.data;
            if (code === 0) {
                set('token', data.token)
                window.location.href='/'
                message.success(msg);
            } else {
                message.error(msg)
            }
        }) 
    }

    render() {
        return (
            <div id='login'>
                <Form
                    id='login-form'
                    {...layout}
                    onFinish={this.login}
                    ref={this.formRef}>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                type: 'string',
                                required: true
                            }
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                type: 'string',
                                required: true
                            }
                        ]}>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button type="primary" htmlType="reset">
                                Reset
                            </Button>
                        </Space>
                        
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Login;
