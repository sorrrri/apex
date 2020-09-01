let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);





const content = document.querySelector('.content')
const scrollHandler = document.querySelector('.scroll-handler')
const scrollToTop = document.querySelector('.scroll-to-top')
const scrollToBottom = document.querySelector('.scroll-to-bottom')
const scrollToLeft = document.querySelector('.scroll-to-left')
const scrollToRight = document.querySelector('.scroll-to-right')

function toggleScrollHandler() {
    scrollHandler.classList.toggle("active")
}

function handleScrollToTop() {
    content.scrollTo({top: 0, behavior: "smooth"})
}

function handleScrollToBottom() {
    content.scrollTo({top: content.scrollHeight - content.clientHeight, behavior: "smooth"})
}

function handleScrollToLeft() {
    content.scrollTo({left: 0, behavior: "smooth"})
}

function handleScrollToRight() {
    content.scrollTo({left: content.scrollWidth - content.clientWidth, behavior: "smooth"})
}

if(scrollHandler) {
    scrollHandler.addEventListener('click', toggleScrollHandler)
    scrollToTop.addEventListener('click', handleScrollToTop)
    scrollToBottom.addEventListener('click', handleScrollToBottom)
    scrollToLeft.addEventListener('click', handleScrollToLeft)
    scrollToRight.addEventListener('click', handleScrollToRight)

}



var dragSrcEl = null;

function handleDragStart(e) {
    // Target (this) element is the source node.
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);

    this.classList.add('dragElem');
}
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    this.classList.add('over');

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
}

function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        //alert(this.outerHTML);
        //dragSrcEl.innerHTML = this.innerHTML;
        //this.innerHTML = e.dataTransfer.getData('text/html');
        this.parentNode.removeChild(dragSrcEl);
        var dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin',dropHTML);
        var dropElem = this.previousSibling;
        addDnDHandlers(dropElem);

    }
    this.classList.remove('over');
    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
    this.classList.remove('over');

    /*[].forEach.call(cols, function (col) {
      col.classList.remove('over');
    });*/
}

function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragenter', handleDragEnter, false)
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);

}

var cols = document.querySelectorAll('.chart-container');
[].forEach.call(cols, addDnDHandlers);
