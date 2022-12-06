const a = document.querySelectorAll("a");
const slice = 22;
for (let i = 0; i < a.length; i++) {
    if (a[i].textContent.length > slice) {
        let text = a[i].textContent.slice(0, slice) + "...";
        a[i].innerText = text;
    }
}
