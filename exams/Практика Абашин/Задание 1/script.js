// пути к изображениям
const IMAGES = [
  'https://avatars.mds.yandex.net/get-zen_doc/50509/pub_60fa9f19765045376ac7adc2_60fa9f29d2964f52a0177214/scale_1200',
  'http://andrey-eltsov.ru/wp-content/uploads/2020/07/ctkds-nhus_ji-63-mmg_k-k_k_kg_mj-j_hy6fer96_juuu-kanadskij-grizli-scaled.jpg',
  'https://img5.goodfon.ru/original/1920x1408/b/97/fantaziia-kosmos-devushka-skafandr-babochka-fantastika.jpg',

  'https://bfauto.ru/wp-content/uploads/f/a/9/fa9f9093c477091447ce77d726962df4.jpeg',
  'https://live.staticflickr.com/7648/16820784767_93cb0f6cdd_b.jpg',
  'https://placepic.ru/wp-content/uploads/2021/02/lesnaia-kunitsa-zheltodushka-mordashka-derevo.jpg',

  'https://i.pinimg.com/736x/a7/98/3d/a7983dbb0c5b254ee8fac00dd8ff4ff9.jpg',
  'https://i.pinimg.com/736x/17/12/e8/1712e8b37e987f37c401480fd0e56884.jpg',
  'https://kg-portal.ru/img/75904/main_2x.jpg',
]


/**
 * Создает элемент галереи вида:
 * <div><img></div>
 * С обработчиками клика для увеличения и отмены.
 * @param {string} src - путь к изображению
 */
function createImgElement(src) {
  const imgTag = document.createElement('img')
  imgTag.src = src
  imgTag.alt = ""
  imgTag.onclick = imgClickHandler

  const divTag = document.createElement('div')
  divTag.append(imgTag)
  return divTag
}


/**
 * Обработчик клика по картинке из галереи.
 * Создает popup вида:
 * <div class="popup">
 *   <div class="popup_bg">></div>
 *   <img class="popup_img" src="...">  // изображение, увеличенное в 2 раза
 * </div>
 * @param {MouseEvent} event - событие клика по изображению
 */
function imgClickHandler(event) {
  const popup = document.createElement('div')
  popup.classList.add('popup')

  const popupBg = document.createElement('div')
  popupBg.classList.add('popup_bg')
  // удаляем родительский тег <div class="popup">...</div>
  popupBg.onclick = e => e.target.parentNode.remove()

  const popupImg = document.createElement('img')
  popupImg.classList.add('popup_img')
  popupImg.alt = event.target.alt
  popupImg.src = event.target.src
  popupImg.height = event.target.height * 2

  popup.append(popupBg, popupImg)
  document.body.prepend(popup)
}


// находим тег с id="gallery"
const galleryTag = document.getElementById('gallery')

// наполняем его изображениями
IMAGES.forEach((src) => {
  galleryTag.append(createImgElement(src))
})
