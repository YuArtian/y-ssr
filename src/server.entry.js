import createApp from './app'

//在服务端执行
export default () => {
  const { app } = createApp()
  return app
}