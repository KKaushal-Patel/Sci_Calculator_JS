// select all the buttons
let all_btns = document.querySelectorAll("button");
let final_ans = document.getElementById("screen_result");

// select the screen to show output
let display = document.getElementById("screen");
let result = "";
let memory = "";
let curr_dis_val;

// loop to get all buttons

for (let items of all_btns) {
  ("use strict");

  // put an event on click to get innerText value
  items.addEventListener("click", (e) => {
    let btn_val = e.target.innerText;

    switch (btn_val) {
      // --------- memory functions start --------- //

      // memory clear (MC)
      case "MC":
        memory = "";
        break;

      // memory Store (MS - holds the memory value )
      case "MS":
        memory = display.innerText;
        break;

      // memory recall (MR - get the saved memory value )
      case "MR":
        display.innerText += memory;

        break;

      // memory add (to add the memory val with current result)

      case "M+":
        // first save the value using MS then apply M+
        curr_dis_val = Number.parseFloat(display.innerText);
        memory = Number.parseFloat(memory);
        memory += curr_dis_val; // adding the ms value with current display value:
        display.innerText = memory;
        break;

      // memory minus (to remove the memory val with current result)

      case "M-":
        // first save the value using MS then apply M-
        curr_dis_val = Number.parseFloat(display.innerText);
        memory = Number.parseFloat(memory);
        memory = memory - curr_dis_val; // subtract the ms value with current display value
        display.innerText = memory;
        break;

      // Tested example: 20*72 + 9*80 - 15*41 + 11*33 - 13*64:

      // How it works: 20*72 (MS) + 9*80 (M+) - 15*41 (M-) + 11*33 (M+) - 13*64 (M-) = 1076

      /* At start save the result of equation in MS then get the result for next equation then press M+
          and continue untill the end of equation  */

      // ---------- memory functions end  ------------  //

      // from radian to deg

      case "DEG":
        let radian = display.innerText;
        result = (radian * 180) / Math.PI;
        final_ans.innerHTML = result;
        console.log(final_ans.innerHTML);
        break;

      // to clear screen

      case "C":
        display.innerText = "";
        final_ans.innerText = "";
        break;

      // backspace

      case "←":
        if (display.innerText)
          display.innerText = display.innerText.slice(0, -1);
        break;

      // to evaluate the result:

      case "=":
        try {
          result = display.innerText;
          final_ans.innerText = eval(result);
          final_ans.innerText = Number.parseFloat(final_ans.innerText);
        } catch {
          display.innerText = "Invalid Input";
          // final_ans.innerText = "Invalid Input";
        }
        break;

      // fixed

      case "F-E":
        let fix = display.innerText;
        if (fix.length > 20) {
          // display.innerText = display.innerText.substring(0, 12);
          final_ans.innerText = final_ans.innerText.substring(0, 12);
        }
        break;

      // ----------- trigonometry & function start ----------- //

      case "sin":
        // display.innerText += btn_val;
        final_ans.innerText = Math.sin(display.innerText);

        break;
      case "cos":
        final_ans.innerText = Math.cos(display.innerText).toFixed(8);
        break;
      case "tan":
        final_ans.innerText = Math.tan(display.innerText).toFixed(8);
        break;
      case "cot":
        final_ans.innerText = 1 / Math.tan(display.innerText).toFixed(8);
      case "cosec":
        final_ans.innerText = 1 / Math.sin(display.innerText).toFixed(8);
        break;
      case "sec":
        final_ans.innerText = 1 / Math.cos(display.innerText).toFixed(8);
        break;

      case "abs":
        final_ans.innerText = Math.abs(display.innerText);
        break;
      case "round":
        final_ans.innerText = Math.round(display.innerText);
        break;
      case "floor":
        final_ans.innerText = Math.floor(display.innerText);
        break;
      case "ceil":
        final_ans.innerText = Math.ceil(display.innerText);
        break;

      // -----------  trigonometry & function end  ----------- //

      // ------------ Another Functions Start ------------  //

      case "x":
        btn_val = "*";
        display.innerText += btn_val;
        break;

      case "÷":
        btn_val = "/";
        display.innerText += btn_val;
        break;

      case "π":
        display.innerText += Math.PI.toFixed(10);
        eval(display.innerText);
        break;

      case "e":
        display.innerText += Math.E.toFixed(10);
        eval(display.innerText);
        break;

      // num^2

      case "𝑥^2":
        result = display.innerText * display.innerText;
        final_ans.innerText = eval(result);
        break;

      case "1/𝑥":
        result = 1 / display.innerText;
        final_ans.innerText = eval(result).toFixed(2);
        break;

      case "|𝑥|":
        display.innerText = Math.abs(display.innerText);
        break;

      case "exp":
        display.innerText = Math.exp(display.innerText).toFixed(8);
        break;

      case "mod":
        btn_val = "%";
        display.innerText += btn_val;
        break;

      // square root

      case "2√𝑥":
        display.innerText = Math.sqrt(display.innerText);
        break;

      // factorial of number

      case "n!":
        let num = Number.parseFloat(display.innerText);

        function fact(val) {
          if (val < 0) return "Not allowed!!";
          else if (val == 0) return 1;
          else {
            return val * fact(val - 1);
          }
        }
        let rslt = fact(num);
        final_ans.innerText = rslt;
        break;

      // 10^num

      case "10𝑥":
        display.innerText = 10 ** eval(display.innerText);
        break;

      case "log":
        display.innerText = Math.log10(display.innerText).toFixed(8);
        break;

      case "ln":
        display.innerText = Math.log(display.innerText).toFixed(8);
        break;

      // num^num

      case "𝑥^y":
        btn_val = "**";
        display.innerText += btn_val;
        break;

      case "+/-":
        display.innerText = display.innerText * -1;
        break;

      // ------------ Another Functions end ------------  //

      default:
        display.innerText += btn_val;
    }
  });
}
