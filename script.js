// احتفظ بمرجع لعنصر الزر والعناصر المرتبطة بالتبديل بين الألوان
const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const cardElements = document.querySelectorAll('.card, p, h1, h3, .card-body, .card-title, .card-text, .fa-github, .btn-primary');
const redElements = document.querySelectorAll('.red-elements');

// أنشئ متغيرًا لتخزين حالة الألوان (الرئيسية، الأسود، الأبيض، البرتقالي)
let colorState = 'primary';

// قم بإضافة حدث النقر لزر التبديل
toggleButton.addEventListener('click', function () {
  // قم بالتحقق من حالة الألوان الحالية وتغييرها بناءً على ذلك
  if (colorState === 'primary') {
    // تبديل إلى اللون الأسود
    body.style.backgroundColor = '#000000';
    cardElements.forEach(element => {
      element.style.color = '#ffffff';
    });
    redElements.forEach(element => {
      element.style.color = '#FFB703';
    });
    colorState = 'black';
  } else if (colorState === 'black') {
    // تبديل إلى اللون الأبيض
    body.style.backgroundColor = '#ffffff';
    cardElements.forEach(element => {
      element.style.color = '#000000';
    });
    redElements.forEach(element => {
      element.style.color = '#FFB703';
    });
    colorState = 'white';
  } else {
    // العودة إلى اللون الرئيسي
    body.style.backgroundColor = '#1a2a6c';
    cardElements.forEach(element => {
      element.style.color = '#ffffff';
    });
    redElements.forEach(element => {
      element.style.color = '#FFB703';
    });
    colorState = 'primary';
  }
});

// قم بإضافة حدث النقر لدوائر الألوان لتغيير الألوان مباشرةً
const colorCircles = document.querySelectorAll('.color-circle');
colorCircles.forEach(circle => {
  circle.addEventListener('click', function () {
    const color = circle.classList[1].split('-')[0]; // احصل على لون الدائرة (الأزرق، الأسود، الأبيض، الأحمر)
    if (color === 'blue') {
      // العودة إلى اللون الأزرق الرئيسي
      body.style.backgroundColor = '#1a2a6c';
      cardElements.forEach(element => {
        element.style.color = '#ffffff';
      });
      redElements.forEach(element => {
        element.style.color = '#FFB703';
      });
      colorState = 'primary';
    } else if (color === 'black') {
      // تبديل إلى اللون الأسود
      body.style.backgroundColor = '#000000';
      cardElements.forEach(element => {
        element.style.color = '#ffffff';
      });
      redElements.forEach(element => {
        element.style.color = '#FFB703';
      });
      colorState = 'black';
    } else if (color === 'white') {
      // تبديل إلى اللون الأبيض
      body.style.backgroundColor = '#ffffff';
      cardElements.forEach(element => {
        element.style.color = '#000000';
      });
      redElements.forEach(element => {
        element.style.color = '#FFB703';
      });
      colorState = 'white';
    } else if (color === 'red') {
      // تبديل إلى اللون الأحمر
      body.style.backgroundColor = '#FF0000';
      cardElements.forEach(element => {
        element.style.color = '#ffffff';
      });
      redElements.forEach(element => {
        element.style.color = '#FFB703';
      });
      colorState = 'red';
    }
  });
});
