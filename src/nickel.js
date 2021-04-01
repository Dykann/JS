const pad = document.querySelectorAll(".cn-button");

function test(arr) {
  arr.forEach((number) =>
    document.querySelector(`button[data-cy=codeKeyboard${number}]`).click()
  );
}

test([4, 7, 9, 2, 1, 3, 4, 5, 8]);
