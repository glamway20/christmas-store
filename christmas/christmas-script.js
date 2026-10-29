/* ==========================================
   إعدادات المتجر
========================================== */

// اكتبي رقم واتسابك مع رمز الدولة.
// مثال: 963912345678
// بدون + أو مسافات أو شرطات.


const WHATSAPP_NUMBER = "963981792882";


// العملة المستخدمة في المتجر.

const CURRENCY = "ل.س";



const products = [

    {
        id: 1,

        name: "مدة ارانب",

        description: "مدّة جميلة بأجواء شتوية دافئة.",

        image:
            "مدة ارانب.jpg",

        sizes: [

            {
                name: " 40 × 60 سم",
                price: 850
            },

            {
                name: " 50 × 80 سم",
                price: 1800
            },

            {
                name: " 60 × 90 سم",
                price: 2500
            },

            {
                name: " 80 × 120 سم",
                price: 3900
            },

            {
                name: " 100 × 140 سم",
                price: 5800
            }

        ]
    },


    {
        id: 2,

        name: "مدّة شجرة العيد",

        description: "تصميم مميز ليكمّل ديكور الكريسماس.",

        image:
            "مدة شجرة.jpg",

        sizes: [

       
            {
                name: " 60 × 60 سم",
                price: 1150
            }

        ]
    },


    {
        id: 3,

        name: "مدّة هدايا سانتا",

        description: "ألوان احتفالية بتناسب أجواء العيد.",

        image:
            "مدة غزلان و هدايا.jpg",

        sizes: [

            {
                name: "صغير 40 × 60 سم",
                price: 800
            },

            {
                name: " 60 × 90 سم",
                price: 1500
            },

            {
                name: " 80 × 50 سم",
                price: 1150
            },

            {
                name: "100 × 140 سم",
                price: 4500
            }

        ]
    },


    {
        id: 4,

        name: "مدّة رجل الثلج ",

        description: "تصميم ناعم لعشاق الديكور الشتوي.",

        image:
            "مدة رجل ثلج.jpg",

        sizes: [

            {
                name: " 40 × 60 سم",
                price: 900 
            },

            {
                name: " 50 × 80 سم",
                price: 1250
            },

            {
                name: " 80 × 120 سم",
                price: 2300
            }

        ]
    },


    {
        id: 5,

        name: "مدّة عصرية مميزة",

        description: "مدة جميلة و عصرية تبرز جمال ديكورك.",

        image:
            "مدة بابا نويل 3D.jpg",

        sizes: [

             {
                name: " 60 × 60 سم",
                price: 1000
            },

            {
                name: " 80 × 80 سم",
                price: 1700
            },

            {
                name: " 100 × 100 سم",
                price: 2700
            },

            {
                name: " 120 × 120 سم",
                price: 3300
            },

            {
                name: " 140 × 140 سم",
                price: 4160
            },

            {
                name: " 160 × 160 سم",
                price: 6000
            }

        ]
    },


    {
        id: 6,

        name: "مدّة أجواء الكريسماس",

        description: "اختيار جميل لتزيين البيت أو تقديمه كهدية.",

        image:
            "مدة وجه بابا نويل.jpg",

        sizes: [

            {
                name: "صغير 40 × 60 سم",
                price: 800
            },

            {
                name: " 50 × 80 سم",
                price: 1050
            },

            {
               name: " 60 × 90 سم",
                price: 1350
            },

            {
                 name: " 80 × 120 سم",
                price: 2200
            }
        ]
   
    },


          
        {  
            id: 7,

        name: "مدّة السعادة ",

        description: "اختيار جميل لغرف الاطفال أو للاحساس باجواء العيد.",

        image:
            "مدة بابا نويل.jpg",

        sizes: [

            {
                name: "صغير 40 × 60 سم",
                price: 800
            },

            {
                name: " 80 × 80 سم",
                price: 1300
            },

            {
               name: " 100 × 100 سم",
                price: 1850
            }
        ]
        },

        {
        id: 8,

        name: "مدّة بابا نويل و الغزلان ",

        description: "تصميم ناعم بشكل مستطيل لابراز جمال بيتك.",

        image:
            "مدة بابا نويل و رجل ثلج و غزال مستطيلة.jpg",

        sizes: [


            {
                name: " 40 × 120 سم",
                price: 1150
            }

        ]
    },


     {
        id: 9,

        name: "مدّة ثلاثة من رجال الثلج ",

        description: "اجواء شتوية راقية بامتياز.",

        image:
            "مدة ثلاثة من رجال الثلج.jpg",

        sizes: [


            {
                name: " 40 × 60 سم",
                price: 850
            },

            {
                name: " 50 × 80 سم",
                price: 1250
            },

            {
                name: " 60 × 90 سم",
                price: 1550
            },

            {
                name: " 80 × 120 سم",
                price: 2400
            }

            
            

        ]
    },

        ]
    




// ==========================================
// متغيرات الموقع
// ==========================================

let cart = [];

let selectedProduct = null;


// ==========================================
// اختصار للوصول إلى عناصر HTML
// ==========================================

function getElement(id) {

    return document.getElementById(id);

}


// ==========================================
// تنسيق السعر
// ==========================================

function formatPrice(price) {

    return (
        new Intl.NumberFormat("en-US").format(price)
        + " "
        + CURRENCY
    );

}


// ==========================================
// عرض المنتجات
// ==========================================

function renderProducts() {

    const productsGrid = getElement("productsGrid");

    productsGrid.innerHTML = "";


    products.forEach(function (product) {

        const minimumPrice = Math.min(

            ...product.sizes.map(function (size) {

                return size.price;

            })

        );


        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <button
                class="product-image-btn"
                data-product-id="${product.id}"
                aria-label="عرض صورة ${product.name}"
            >

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="image-label">
                    اضغطي لتكبير الصورة
                </span>

            </button>


            <div class="product-info">

                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-price">
                    ابتداءً من ${formatPrice(minimumPrice)}
                </div>


                <button
                    class="choose-product-btn"
                    data-product-id="${product.id}"
                >
                    اختاري القياس
                </button>

            </div>

        `;


        productsGrid.appendChild(card);

    });


    // تفعيل أزرار فتح المنتج

    document.querySelectorAll("[data-product-id]").forEach(

        function (button) {

            button.addEventListener("click", function () {

                const id = Number(button.dataset.productId);

                openProduct(id);

            });

        }

    );

}


// ==========================================
// فتح تفاصيل المنتج
// ==========================================

function openProduct(productId) {

    selectedProduct = products.find(function (product) {

        return product.id === productId;

    });


    if (!selectedProduct) {

        return;

    }


    getElement("modalImage").src = selectedProduct.image;

    getElement("modalImage").alt = selectedProduct.name;


    getElement("modalName").textContent =
        selectedProduct.name;


    getElement("modalDescription").textContent =
        selectedProduct.description;


    const sizeSelect = getElement("modalSize");

    sizeSelect.innerHTML = "";


    selectedProduct.sizes.forEach(function (size, index) {

        const option = document.createElement("option");

        option.value = index;

        option.textContent =
            size.name + " — " + formatPrice(size.price);


        sizeSelect.appendChild(option);

    });


    getElement("modalQuantity").value = 1;


    updateModalPrice();


    getElement("productModal").classList.add("active");


    document.body.style.overflow = "hidden";

}


// ==========================================
// إغلاق تفاصيل المنتج
// ==========================================

function closeProductModal() {

    getElement("productModal").classList.remove("active");

    document.body.style.overflow = "";

}


// ==========================================
// حساب سعر المنتج داخل النافذة
// ==========================================

function updateModalPrice() {

    if (!selectedProduct) {

        return;

    }


    const sizeIndex = Number(getElement("modalSize").value);


    const selectedSize =
        selectedProduct.sizes[sizeIndex];


    const quantity = Math.max(

        1,

        Math.min(

            99,

            parseInt(getElement("modalQuantity").value, 10) || 1

        )

    );


    const total = selectedSize.price * quantity;


    getElement("modalPrice").textContent =
        formatPrice(total);

}


// ==========================================
// إضافة المنتج إلى السلة
// ==========================================

function addToCart() {

    if (!selectedProduct) {

        return;

    }


    const sizeIndex = Number(getElement("modalSize").value);


    const selectedSize =
        selectedProduct.sizes[sizeIndex];


    const quantity = Math.max(

        1,

        Math.min(

            99,

            parseInt(getElement("modalQuantity").value, 10) || 1

        )

    );


    // إذا كان نفس المنتج ونفس القياس موجودين،
    // منزيد الكمية بدل ما نكرر العنصر.

    const existingItem = cart.find(function (item) {

        return (

            item.productId === selectedProduct.id

            &&

            item.sizeName === selectedSize.name

        );

    });


    if (existingItem) {

        existingItem.quantity = Math.min(

            99,

            existingItem.quantity + quantity

        );

    } else {

        cart.push({

            productId: selectedProduct.id,

            name: selectedProduct.name,

            image: selectedProduct.image,

            sizeName: selectedSize.name,

            price: selectedSize.price,

            quantity: quantity

        });

    }


    renderCart();


    closeProductModal();


    showToast("تمت إضافة المنتج إلى السلة ❤️");

}


// ==========================================
// عرض السلة وحساب الإجمالي
// ==========================================

function renderCart() {

    const cartItems = getElement("cartItems");


    cartItems.innerHTML = "";


    let total = 0;

    let totalQuantity = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                سلتك فارغة حالياً 🛍️

            </p>

        `;

    }


    cart.forEach(function (item, index) {

        const itemTotal = item.price * item.quantity;


        total += itemTotal;

        totalQuantity += item.quantity;


        const row = document.createElement("div");

        row.className = "cart-item";


        row.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >


            <div>

                <div class="cart-item-name">

                    ${item.name}

                </div>


                <div class="cart-item-details">

                    القياس: ${item.sizeName}

                    <br>

                    سعر القطعة: ${formatPrice(item.price)}

                </div>


                <div class="quantity-controls">

                    <button
                        data-action="decrease"
                        data-index="${index}"
                        aria-label="تقليل الكمية"
                    >
                        −
                    </button>


                    <span>${item.quantity}</span>


                    <button
                        data-action="increase"
                        data-index="${index}"
                        aria-label="زيادة الكمية"
                    >
                        +
                    </button>

                </div>

            </div>


            <div class="cart-item-price">

                ${formatPrice(itemTotal)}

            </div>


            <button
                class="remove-item-btn"
                data-action="remove"
                data-index="${index}"
            >

                حذف

            </button>

        `;


        cartItems.appendChild(row);

    });


    // تحديث العدد والإجمالي

    getElement("cartCount").textContent =
        totalQuantity + " قطعة";


    getElement("headerCartCount").textContent =
        totalQuantity;


    getElement("cartTotal").textContent =
        formatPrice(total);


    // تعطيل زر الطلب إذا كانت السلة فارغة

    getElement("checkoutBtn").disabled =
        cart.length === 0;

}


// ==========================================
// التحكم بالكمية وحذف المنتجات
// ==========================================

getElement("cartItems").addEventListener(

    "click",

    function (event) {

        const button = event.target.closest("[data-action]");


        if (!button) {

            return;

        }


        const index = Number(button.dataset.index);

        const action = button.dataset.action;


        if (!cart[index]) {

            return;

        }


        if (action === "increase") {

            cart[index].quantity = Math.min(

                99,

                cart[index].quantity + 1

            );

        }


        if (action === "decrease") {

            cart[index].quantity -= 1;


            if (cart[index].quantity <= 0) {

                cart.splice(index, 1);

            }

        }


        if (action === "remove") {

            cart.splice(index, 1);

        }


        renderCart();

    }

);


// ==========================================
// رسالة إشعار
// ==========================================

function showToast(message) {

    const toast = getElement("toast");


    toast.textContent = message;


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


// ==========================================
// تجهيز الطلب عبر واتساب
// ==========================================

function checkoutWhatsApp() {

    if (cart.length === 0) {

        showToast("السلة فارغة، اختاري منتجات أولاً");

        return;

    }


    // تأكدي من وضع رقم واتساب الصحيح في أعلى الملف.

    if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {

        showToast("عدّلي رقم واتسابك داخل ملف script.js أولاً");

        return;

    }


    let total = 0;


    const message = [];


    message.push("🎄 *طلب جديد - مدّات الكريسماس*");

    message.push("");

    message.push("مرحباً، بدي اطلب المنتجات التالية:");

    message.push("");


    cart.forEach(function (item, index) {

        const itemTotal = item.price * item.quantity;


        total += itemTotal;


        message.push(

            `*${index + 1}. ${item.name}*`

        );


        message.push(

            `القياس: ${item.sizeName}`

        );


        message.push(

            `الكمية: ${item.quantity}`

        );


        message.push(

            `سعر القطعة: ${formatPrice(item.price)}`

        );


        message.push(

            `المجموع: ${formatPrice(itemTotal)}`

        );


        message.push(

            `صورة المنتج: ${item.image}`

        );


        message.push("");

    });


    message.push("━━━━━━━━━━━━━━");

    message.push(

        `*الإجمالي النهائي: ${formatPrice(total)}*`

    );


    message.push("");

    message.push(

        "يرجى تأكيد توفر المنتجات وتفاصيل التوصيل ❤️"

    );


    // تحويل الرسالة إلى صيغة مناسبة لرابط واتساب.

    const encodedMessage = encodeURIComponent(

        message.join("\n")

    );


    const whatsappURL =

        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    // فتح واتساب برسالة جاهزة.

    window.open(

        whatsappURL,

        "_blank",

        "noopener,noreferrer"

    );

}


// ==========================================
// ربط الأزرار بالأحداث
// ==========================================


// تغيير القياس

getElement("modalSize").addEventListener(

    "change",

    updateModalPrice

);


// تغيير الكمية

getElement("modalQuantity").addEventListener(

    "input",

    updateModalPrice

);


// إضافة للسلة

getElement("addToCartBtn").addEventListener(

    "click",

    addToCart

);


// إغلاق النافذة

getElement("closeModal").addEventListener(

    "click",

    closeProductModal

);


// إغلاق النافذة عند الضغط على الخلفية

getElement("productModal").addEventListener(

    "click",

    function (event) {

        if (event.target === getElement("productModal")) {

            closeProductModal();

        }

    }

);


// إغلاق النافذة باستخدام زر Escape

document.addEventListener(

    "keydown",

    function (event) {

        if (event.key === "Escape") {

            closeProductModal();

        }

    }

);


// الانتقال إلى السلة

getElement("goToCart").addEventListener(

    "click",

    function () {

        getElement("cart").scrollIntoView({

            behavior: "smooth"

        });

    }

);


// إتمام الطلب

getElement("checkoutBtn").addEventListener(

    "click",

    checkoutWhatsApp

);


// ==========================================
// تشغيل الموقع
// ==========================================

renderProducts();

renderCart();