import { Form, Button, Row } from 'antd'
import { FieldFormWithCol, Container, ButtonWrap } from '@/components'
import { filterInvalidValue } from '@/utils/filters'

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
}

function Role (props) {
  const { form } = props
  const fields = [
    {
      type: 'input',
      id: 'roleName',
      col: 8,
      formItem: { label: '角色名', ...formItemLayout }
    },
    {
      type: 'select',
      id: 'roleState',
      col: 8,
      config: {
        options: [
          { label: '启用', value: 1 },
          { label: '禁用', value: 0 }
        ]
      },
      formItem: { label: '角色状态', ...formItemLayout }
    }
  ]

  function getData () {
    form.validateFields((error, values) => {
      console.log(filterInvalidValue(values))
    })
  }

  return (
    <Container>
      <Form>
        <Row>
          {fields.map(field => {
            return <FieldFormWithCol {...field} key={field.id} form={form} />
          })}
        </Row>
        <RowStyle>
          <ButtonWrap>
            <Button onClick={getData} type='primary'>
              查询
            </Button>
            <Button onClick={getData} type='primary'>
              重置
            </Button>
            <Button onClick={getData} type='primary'>
              导出
            </Button>
          </ButtonWrap>
        </RowStyle>
      </Form>
    </Container>
  )
}

export default Form.create()(Role)

const RowStyle = styled(Row)`
  text-align: center;
`
