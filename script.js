
// ฟังก์ชันค้นหาสตริง (ชื่อเซลล์เดิม)
// เซลล์ หมายถึง เซลล์ในโปรแกรม Excel
function find_str() {
  //เรียกค่าชื่อเซลล์จาก input
  let input_cell_value = document.getElementById('cellName').value;
  //หาความยาวของชื่อเซลล์
  let input_cell_value_len = input_cell_value.length;
  console.log('INPUT_CELL_VALUE_LEN', input_cell_value_len)
  //เรียกค่าสูตรปัจจุบัน
  let formula_str = document.getElementById('formula').value;
  // let formula = document.getElementById('formula').value;
  //หาตำแหน่งของเครื่องหมายมากกว่าที่ปรากฏที่แรก
  let index_sign_in_formula = formula_str.indexOf(">");
  console.log('INDEX_SIGN_IN_FORMULA', index_sign_in_formula)
  //ตั้งค่าตัวแปรสำหรับตำแหน่งแรกของการหั่นสูตร โดยเริ่มจากตำแหน่งที่ 4 (ตำแหน่งแรกคือ 0)
  let beginning_slice = 4;
  //หาความยาวของสูตร
  let formula_str_len = formula_str.length;
  //หั่นสูตรโดยนับจากตำแหน่งของตำแหน่งแรกของการหั่นสูตรและตำแหน่งของเครื่องหมายมากกว่าที่ปรากฏที่แรก
  let get_input_cell_name = formula_str.slice(beginning_slice, index_sign_in_formula)
  //ส่งค่าชื่อเซลล์เดิมออกไป
  return get_input_cell_name;
}
find_str()
console.log('FIND_STR()', find_str())

  // ฟังก์ชันเรียกตำแหน่งของเซลล์
function getCellName() {
  //เรียกค่าสูตร
  let grade_formula = document.getElementById('formula').value;
  //เรียกชื่อเซลล์เดิม
  let old_cell_name = find_str()
  console.log('OLD_CELL_NAME', old_cell_name)
  //สร้าง RegExp สำหรับการค้นหา ชื่อเซลล์เดิม
  const reg_old_cell_name = new RegExp(old_cell_name, "g");
  console.log('REG_OLD_CELL_NAME', reg_old_cell_name)
  //ชื่อเซลล์ใหม่จาก input
  let input_cell_value = document.getElementById('cellName').value;
  //แทนที่ชื่อเซลล์เดิมด้วยชื่อเซลล์ใหม่จาก input
  grade_formula = grade_formula.replace(reg_old_cell_name, input_cell_value)
  console.log('GRADE_FORMULA', grade_formula)
  // ส่งค่าไปที่ textarea
  document.getElementById('formula').innerHTML = grade_formula;
}

 // เรียกสูตรปัจจุบัน สำหรับฟังก์ชันรีเซต
function reset() {
  document.getElementById('formula').innerHTML = "=IF(A1>=80,4,IF(A1>=75,3.5,IF(A1>=70,3,IF(A1>=65,2.5,IF(A1>=60,2,IF(A1>=55,1.5,IF(A1>=50,1,IF(A1<50,0))))))))"
 }


 function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("formula");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  document.getElementById("alert").innerHTML = "คัดลอก!!: " + copyText.value;
}
