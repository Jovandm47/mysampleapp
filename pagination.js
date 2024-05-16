let i = 0;
let numArr = [];
while (numArr.length < 100) {
  numArr.push(1 + i);
  i++;
}

const visibleButtons = 5;
const pageLength = 12;
const totalRecords = numArr.length;

function totalPages() {
  return Math.ceil(totalRecords / pageLength);
}

function showVisibleButtons(currentPageNo, visibleButtons = 5) {
  const btnPageNo = [];
  const countPages = totalPages();
  if (countPages <= visibleButtons) {
    for (let pageNo = 1; pageNo <= countPages; pageNo++) {
      btnPageNo.push(pageNo);
    }
  } else {
    const sidePageNo = Math.floor(visibleButtons - 3 / 2);
    let pageNo = currentPageNo - sidePageNo;

    let buttons = visibleButtons - 1;

    if (pageNo <= 1) {
      pageNo = 1;
    } else {
      btnPageNo.push(1);
    }
    while (btnPageNo.length < buttons) {
      btnPageNo.push(pageNo);
      pageNo++;
    }

    if (btnPageNo.length < visibleButtons) {
      btnPageNo.push(countPages);
    }
  }

  return btnPageNo;
}

function showPage(pageNo) {
  if (pageNo < 1) {
    throw new RangeError("page not found");
  }
  const pageCount = totalPages();

  if (pageCount < pageNo) {
    throw new RangeError("page not found");
  }

  const pageIdx = pageLength * (pageNo - 1);
  const page = [];
  for (let idx = 0; idx < pageLength && pageIdx + idx < totalRecords; idx++) {
    page.push(numArr[pageIdx + idx]);
  }
  return page;
}

try {
  console.log(showPage(6));
} catch (ex) {
  console.error("page 6 not found");
}

console.log(showVisibleButtons(1));
console.log(showVisibleButtons(2));
console.log(showVisibleButtons(3));
console.log(showVisibleButtons(4));
console.log(showVisibleButtons(5));
console.log(showVisibleButtons(6));
console.log(showVisibleButtons(7));
