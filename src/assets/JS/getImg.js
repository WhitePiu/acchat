import tableData1 from "../tableData1"
const getImg = (name) => {
  let imgSrc = "https://ts1.cn.mm.bing.net/th/id/R-C.bf2a3c8edc97c8526ed30893b6c0d899?rik=CDRPwfrDcvMCTQ&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2f6e83ec65135729c82ca8f4a1f03772600c737ffb.png&ehk=IWnvUieva1OxVp0JWeW3RysocTB8UqohXsgIQG%2bzPjo%3d&risl=&pid=ImgRaw&r=0"

  tableData1.forEach((item, index, array) => {
    if (name === item.name) {
      imgSrc = item.src
    }
  })
  return imgSrc
}

export default getImg