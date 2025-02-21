const menuBtn = document.getElementById("menu-btn");
const themeToggler = document.getElementById("theme-toggler");
const header = document.querySelector(".header");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  header.classList.toggle("show");
};

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const percent = entry.target.getAttribute("data-percent");
          entry.target.querySelector("span").style.width = percent + "%";
          entry.target.classList.add("animate"); // انیمیشن اضافه می‌کنه

          // وقتی عنصر خارج شد، دوباره مقدار اولیه بده تا دوباره تکرار بشه
        } else {
          entry.target.querySelector("span").style.width = "0%";
          entry.target.classList.remove("animate"); // حذف انیمیشن برای اجرای مجدد
        }
      });
    },
    { threshold: 0.5 }
  ); // وقتی ۵۰٪ از عنصر دیده شد، اجرا می‌شود

  bars.forEach((bar) => observer.observe(bar));
});
