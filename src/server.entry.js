import createApp from './app'

//在服务端执行
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push(context.url)
    router.onReady(()=> {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        reject({code: 404})
      }
      resolve(app)
    }, reject)
  })
}