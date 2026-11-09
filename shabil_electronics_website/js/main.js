"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close menu" : "Menu";
  });
}

const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const data = new FormData(enquiryForm);
    const subject = encodeURIComponent("Website enquiry — Shabil Electronics");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nEnquiry type: ${data.get("enquiryType")}\nPreferred contact: ${data.get("preferredContact")}\n\nMessage:\n${data.get("message")}`
    );
    const mailto = `mailto:Lubegas26@mru.ac.ug?subject=${subject}%20-%20${encodeURIComponent(data.get("subject"))}&body=${body}`;
    const status = document.querySelector("#form-status");
    status.textContent = "Your email application should open with the enquiry prepared. Please send it there.";
    window.location.href = mailto;
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
