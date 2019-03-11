import { compose, withProps } from 'recompose';


export default compose(
  withProps(({ screenProps }) => {
    const { message, loadMessage, template, submitTemplate, addAction, updateTemplate, actions } = screenProps
    return { message, loadMessage, template, submitTemplate, addAction, updateTemplate, actions}
  })
)

