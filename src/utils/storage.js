// 设置主题
export const setThemes = (data) => {
  localStorage.setItem('THEMES', JSON.stringify(data))
}

// 获取主题
export const getThemes = () => {
  let result = localStorage.getItem('THEMES')
  result = result
    ? JSON.parse(result)
    : {
        showBreadcrumb: true,
        showTabs: true
      }
  return result
}
