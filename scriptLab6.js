let VictoryСondition = 5;
let turn = 0;
function loadTable(){
    let myTable = document.getElementById("iTable");
    let fild_width = document.getElementById("filed_width").value;
    let fild_hight = document.getElementById("filed_hight").value;
    let nx = fild_width;
    let ny = fild_hight;
    myTable.innerHTML = "";
    for (let i=0; i < nx; ++i){
        let newTableLine = document.createElement("tr");
        for (let j=0; j < ny; ++j) {
            let newTableCell = document.createElement("td");

            newTableCell.setAttribute("id","cell_"+(i+1)+"_"+(j+1));

            //newTableCell.setAttribute("cellStatus","nothing");
            newTableCell.cellStatus = "nothing";

            newTableCell.addEventListener("mousedown",cellMouseDown);
            newTableLine.appendChild(newTableCell);
        }
        myTable.appendChild(newTableLine);
    }
}

function cellMouseDown(e) {
    e = e || window.event;
    let index1 = el.closest("tr").rowIndex;
    let index2 = el.closest("td").cellIndex;
    //alert(e.which);
    
    switch (e.which) {
        case 1:
            if (this.style.backgroundImage == "") {
            //this.style.backgroundImage = "url(crug.png)";
            this.cellStatus =   "O";
            //this.innerHTML = this.;cellStatus
            VictoryCheck(index1, index2, this.cellStatus);
        }
            break;
        case 2:
            if (turn == 2){
                this.cellStatus =   "O";
                --turn;
            } else {
                this.cellStatus =   "X";
                ++turn; 
            }
            VictoryCheck(index1, index2, this.cellStatus);
            break;
        case 3:
            if (this.style.backgroundImage == "") {
                //this.style.backgroundImage = "url(crest.png)";
                this.cellStatus =  "X";
                VictoryCheck(index1, index2, this.cellStatus);
            }
            break;
    }
}

function CheckDirection(row, cell, typeField, directionRow, directionCell)
{
    let currentRow = row + directionRow;
    let currentCell = cell + directionCell;
    let id = "cell_" + (currentRow + 1) + "_" + (currentCell + 1);
    let myCell = document.getelementByid(id);
    if (myCell != null && typeField == myCell.cellStatus)
    {
        return 1 + CheckDirection(currentRow, currentCell, typeField, directionRow, directionCell);
    }
    return 0;
}

function VictoryCheck(row, cell, typeField) {
    let HorizontalCheck = CheckDirection(row, cell, typeField, 0, -1) + CheckDirection(row, cell, typeField, 0, 1) + 1;
    let VerticalСheck = CheckDirection(row, cell, typeField, -1, 0) + CheckDirection(row, cell, typeField, 1, 0) + 1;
    let DecreasegDiagonalСheck = CheckDirection(row, cell, typeField, -1, -1) + CheckDirection(row, cell, typeField, 1, 1) + 1;
    let IncreasingDiagonalСheck = CheckDirection(row, cell, typeField, -1, 1) + CheckDirection(row, cell, typeField, 1, -1) + 1;
     if (HorizontalCheck >= VictoryСondition || VerticalСheck >= VictoryСondition || DecreasegDiagonalСheck >= VictoryСondition || IncreasingDiagonalСheck >= VictoryСondition) {
        if (typeField == "crest"){
           // document.getElementById("Cross").innerHTML = "Победил Альянс";
        }else if (typeField == "crug")
           // document.getElementById("Cross").innerHTML = "Победила Орда";
       // document.getElementById("Table1").style.display = "none";
    } else if (CheckDrow()){
       // document.getElementById("Cross").innerHTML = "Ничья";
    }
}

document.oncontextmenu = function () {return false;};