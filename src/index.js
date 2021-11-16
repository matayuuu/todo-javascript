import "./styles.css";

const addKlick = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成　　//liタグにテキストを入力
  const li = document.createElement("li");
  li.innerText = inputText;

  //Button（完了）の作成
  const finishButton = document.createElement("button");
  finishButton.innerText = "完了";
  finishButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)の作成
  const deliteButton = document.createElement("button");
  deliteButton.innerText = "削除";
  deliteButton.addEventListener("click", () => {
    alert("削除");
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(finishButton);
  div.appendChild(deliteButton);
  //console.log(div);

  //未完了リストにdivタグを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addKlick());

//完了リストにdivタグを追加
//document.getElementById("comlete-area").appendChild(div);
