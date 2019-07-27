<template>
  <div class="container">
    <h2 contenteditable @input="updateIt">{{ title }}</h2>
    <p contenteditable @input="updateItc"> {{ article_info }} </p>

    <div id="app">
      <div id="toolBar"> 
          <input id="fileInput" type="file" onchange="processFiles(this.files)" accept="text/plain">
          
          <button id="bold" title="Bold (Ctrl+B)"><i class="fa fa-bold"></i></button>
          <button id="italic" title="Italic (Ctrl+I)"><i class="fa fa-italic"></i></button>
          <button id="underline" title="Underline (Ctrl+U)"><i class="fa fa-underline"></i></button>
          <select name="fonts" id="fonts">
            <option value="Arial" selected>Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Impact">Impact</option>
            <option value="Courier New">Courier New</option>
          </select>
          <select name="size" id="size">
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16" selected>16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="26">26</option>
          </select>
          <button id="align-left" title="Left"><i class="fa fa-align-left"></i></button>
          <button id="align-center" title="Center"><i class="fa fa-align-center"></i></button>
          <button id="align-right" title="Right"><i class="fa fa-align-right"></i></button>
          <button id="list-ul" title="Unordered List"><i class="fa fa-list-ul"></i></button>
          <button id="list-ol" title="Ordered List"><i class="fa fa-list-ol"></i></button>    
      </div>
      <div id="fileOutput" contenteditable @input="updateItb">{{ body }}</div>
    </div>

   
    <div id="preview">
        <div class="article">
            <div class="article-thumb">
              <img class="img-responsive" src="https://via.placeholder.com/150">
            </div>

            <div class="article-info">            
                <h2>{{ title }}</h2>
                <p>{{ body }}</p>
            </div>

            <button class="btn btn-primary">Read More</button>
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
h2 {
  outline: none;
}

#app {
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  opacity: 0.9;

  #toolBar {
    width: 100%;
    margin: 0 auto 10px;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: none;
    border: none;
    box-sizing: border-box;
    padding: 0;
    font-size: 20px;
    color: #a6a6a6;
    cursor: pointer;
    outline: none;
    &:hover {
      border: 1px solid #a6a6a6;
      color: #777;
    }
  }

  #bold, #italic {
    font-size: 18px;
  }

  #underline {
    font-size: 18px;
    margin-right: 17px;
  }

  #align-right {
    margin-right: 17px;
  }

  #align-left {
    margin-left: 17px;
  }

  select {
    height: 24px;
    font-size: 15px;
    font-weight: bold;
    color: #444;
    background: #fcfcfc;
    border: 1px solid #a6a6a6;
    border-radius: 3px;
    margin: 0;
    outline: none;
    cursor: pointer;
    > option {
      font-size: 15px;
      background: #fafafa;
    }
  }

  #fonts {
    width: 140px;
  }

} 



.modal-btn {
  width: 90px;
  height: 30px;
  font-size: 12pt;
  border: 1px solid #a6a6a6;
  color: #777;
  &:hover {
    border: 2px solid #a6a6a6;
    color: #000;
  }
}

.sp-replacer {
  background: #fcfcfc;
  padding: 1px 2px 1px 3px;
  border-radius: 3px;
  border-color: #a6a6a6;
  margin-top: -1px;
  &:hover {
    border-color: #a6a6a6;
    color: inherit;
  }
}

.sp-preview {
  width: 15px;
  height: 15px;
  border: none;
  margin-top: 2px;
  margin-right: 3px;
}

.sp-preview-inner, .sp-alpha-inner, .sp-thumb-inner {
  border-radius: 3px;
}

#fileOutput {
  position: relative;
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  padding: 20px;
  background: #fcfcfc;
  border-radius: 3px;
  box-shadow: inset 0 0 8px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: hidden;
  word-break: break-all;
  outline: none;
  resize: none;
}

#fileInput {
  display: none;
}

#fileSave-btn {
  margin-right: 30px;
}

#modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px 20px 0 20px;
  border: 1px solid #888;
  width: 50%;
}

/* The Close Button */

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover, &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
}

.h {
  font-size: 16pt;
}

.form-group {
  padding-bottom: 10px;
}

.article {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 30px;
  margin-top: 20px;
  overflow: hidden;

  &-thumb{
    margin-right: 10px;
  }

  &-info{
    h2{
      font-weight: bold
    }
  }
}
</style>

<script>
export default {
  data(){
    return{
      title:'Article Title',
      body: '',
      article_info: 'Write the article info'
    }
  },
  methods:{
    updateIt(e, paylaod){
      let vm = this;
      if (payload == 'a') vm.title = e.target.innerText;
      else if(paylaod == 'b') vm.body = e.target.innertext
    },
    updateItb(e){
      this.body = e.target.innerHTML;
    },
    updateItc(e){
      this.article_info = e.target.innerHTML;
    },
  },
  mounted(){

    let btn = document.getElementById("fileSave-btn");
    let modal = document.getElementById("modal");
    let closeBtn = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
        modal.style.display = "block";
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    $("#cancelBtn").on("click", () => {
        modal.style.display = "none";
    });

    $('#bold').on('click', () => {
        document.execCommand('bold', false, null);
    });

    $('#italic').on('click', () => {
        document.execCommand('italic', false, null);
    });

    $('#underline').on('click', () => {
        document.execCommand('underline', false, null);
    });

    $('#align-left').on('click', () => {
        document.execCommand('justifyLeft', false, null);
    });

    $('#align-center').on('click', () => {
        document.execCommand('justifyCenter', false, null);
    });

    $('#align-right').on('click', () => {
        document.execCommand('justifyRight', false, null);
    });

    $('#list-ul').on('click', () => {
        document.execCommand('insertUnorderedList', false, null);
    });

    $('#list-ol').on('click', () => {
        document.execCommand('insertOrderedList', false, null);
    });

    $('#fonts').on('change', function() {
        var font = $(this).val();
        document.execCommand('fontName', false, font);
    });

    $('#size').on('change', function() {
        var size = $(this).val();
        $('.editor').css('fontSize', size + 'px');
    });

  }
}
</script>