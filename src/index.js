import "./styles.css";

const addKlick = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  //console.log(div);

  //未完了リストにdivタグを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addKlick());
