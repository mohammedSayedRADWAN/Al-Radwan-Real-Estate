  // دالة موحدة لإرسال البيانات للواتساب
export function sendToWhatsApp(e, element) {
    e.preventDefault();
    e.stopPropagation();

    const myNumber = "201070264606"; 

    // الوصول للحاوية الأساسية
    const container = element.closest('.ltn__product-item');

    // سحب البيانات
    const productName = container.querySelector('.product-title a').innerText;
    const productPrice = container.querySelector('.product-price span').innerText;
    // جلب رابط الصورة من قسم الـ product-img
const productImg = container.querySelector('.product-img img').src;

             
    // تجهيز النص
   const text = `طلب جديد من الموقع:%0A%0A` + 
             `*المنتج:* ${productName}%0A` + 
             `*السعر:* ${productPrice}%0A%0A` + 
             `*صورة العقار:*%0A${productImg}`; // خلي اللينك في سطر لوحده في الآخر

    // فتح واتساب
    window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank');
}

export function intiatWatsAPPBtn() {
    

// 1. ربط النجوم
document.querySelectorAll('.product-ratting a').forEach(star => {
    star.addEventListener('click', (e) => sendToWhatsApp(e, star));
});

// 2. ربط أيقونة السلة (أو الواتساب اللي هتغيرها)
document.querySelectorAll('a[title="Add to Cart"]').forEach(cartBtn => {
    cartBtn.addEventListener('click', (e) => sendToWhatsApp(e, cartBtn));
});
}
