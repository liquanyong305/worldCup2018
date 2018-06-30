window.addEventListener('load', function () {
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementById("faqInfo").innerHTML = "<li><a href='faq_smart.html'/>Faq</a></li>";
	} else {
    document.getElementById("faqInfo").innerHTML = "<li><a href='faq.html'/>Faq</a></li>";
	}
})