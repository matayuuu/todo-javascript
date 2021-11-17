import "./styles.css";

const addKlick = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addKlick());

const createIncompleteList = (text) => {
  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成　　//liタグにテキストを入力
  const li = document.createElement("li");
  li.innerText = text;

  //Button（完了）の作成
  const finishButton = document.createElement("button");
  finishButton.innerText = "完了";
  finishButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了から削除
    //parentNodeは全要素を親に格納する、ここでは"list-row"に格納される
    //const finishTaget = finishButton.parentNode;
    //document.getElementById("incomplete-list").removeChild(finishTaget);
    deleteFromIncompleteList(finishButton.parentNode);

    //完了リストに追加する要素
    const addTarget = finishButton.parentNode;
    const addText = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = addText;
    addTarget.appendChild(li);

    //戻すボタンの作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //戻すボタンの親要素（divタグ）を取得
      const returnTerget = returnButton.parentNode;
      document.getElementById("comlete-list").removeChild(returnTerget);
      //テキストの取得
      const returnText = returnTerget.firstElementChild.innerText;
      createIncompleteList(returnText);
    });
    addTarget.appendChild(returnButton);
    document.getElementById("comlete-list").appendChild(addTarget);
  });

  //button(削除)の作成
  const deliteButton = document.createElement("button");
  deliteButton.innerText = "削除";
  deliteButton.addEventListener("click", () => {
    //押された削除ブタンの親タグ（div）を未完了から削除
    deleteFromIncompleteList(deliteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(finishButton);
  div.appendChild(deliteButton);
  //console.log(div);

  //未完了リストから指定のタグを削除
  const deleteFromIncompleteList = (taeget) => {
    document.getElementById("incomplete-list").removeChild(taeget);
  };

  //未完了リストにdivタグを追加
  document.getElementById("incomplete-list").appendChild(div);
};
