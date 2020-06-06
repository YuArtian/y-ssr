import createApp from './app'

//在服务端执行
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(()=> {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        reject({code: 404})
      }

      Promise.all(matchedComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData(store)
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      })
    }, reject)
  })
}