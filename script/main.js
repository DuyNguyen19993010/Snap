// Element reference
let menu_button = document.getElementById('menu-icon');
let menu_close = document.getElementById('side-close-menu');
let side_nav = document.getElementById('side-nav-wrapper');
let side_nav_inner = document.getElementById('side-nav');
let feature_options = document.getElementById('side-feature-options');
let company_options = document.getElementById('side-company-options');
let feature_btn = document.getElementById('feature-btn');
let company_btn = document.getElementById('company-btn');
let floating_options = document.getElementById('floating-options');
let side_feature_btn = document.getElementById('side-feature-btn');
let side_company_btn = document.getElementById('side-company-btn');

floating_options.style.display = 'none';
// Variables
let feature_options_list = [
    {id:'feature-todo',name:'Todo List'}, 
    {id:'feature-cal',name:'Calendar'}, 
    {id:'feature-rem',name:'Reminder'}, 
    {id:'feature-plan',name:'Planning'}];

let company_options_list = [
    {id:'company-history',name:'History'}, 
    {id:'company-team',name:'Our Team'}, 
    {id:'company-blog',name:'Blog'}];

{/* 
<li class= 'floating-option sub-title-font' id= "feature-todo">Todo List</li>
<li class= 'floating-option sub-title-font' id= "feature-cal">Calendar</li>
<li class= 'floating-option sub-title-font' id= "feature-rem">Reminder</li>
<li class= 'floating-option sub-title-font' id= "feature-plan">Planning</li> 
*/}

// Flag
feature_op_flag = false;
company_op_flag = false;
side_feature_op_flag = false;
side_company_op_flag = false;

// Function
function open_menu(){

    side_nav.style.display = 'inline-block';

}

function close_menu(){

    side_nav.style.display = 'none';

}

function open_feature_options(e){
    // Check which button is calling for options
    // Set target options to render
    if (floating_options.style.display == 'none'){
        let target_list = []
        let btn_x = 0;
        let btn_y = 0;
        if (e.target.id == 'feature-btn') {
            company_op_flag = false;
            feature_op_flag = true;   
            target_list = feature_options_list;
            btn_x = feature_btn.getBoundingClientRect().x;
            btn_y = feature_btn.getBoundingClientRect().y;
        }
    
        else {
            feature_op_flag = false;
            company_op_flag = true;   
            target_list = company_options_list;
            btn_x = company_btn.getBoundingClientRect().x;
            btn_y = company_btn.getBoundingClientRect().y; 
    
        }
        
        // Render options
    
        if (feature_op_flag || company_op_flag) {
    
            // Display wrapper
    
            floating_options.style.display = 'flex';
            floating_options.style.left = btn_x - 30 +'px';
            floating_options.style.top = btn_y + 20 +'px';
    
            // Append li children to wrapper
    
            target_list.forEach(item => {
            let li = document.createElement("li");
            li.setAttribute('class', 'floating-option sub-title-font');
            li.setAttribute('id',item.id);
            li.innerHTML = item.name;
            floating_options.append(li);
            });
    
        }
    }

}

function close_option(e){
    let btn_x = 0;
    let btn_y = 0;
    let e_width = 0;
    if (e.target.id == 'feature-btn') {
        btn_x = feature_btn.getBoundingClientRect().x;
        btn_y = feature_btn.getBoundingClientRect().y;
        e_width = feature_btn.width;
    }

    else {
        btn_x = company_btn.getBoundingClientRect().x;
        btn_y = company_btn.getBoundingClientRect().y;
        e_width = company_btn.width; 
    }
    console.log(btn_x);
    if (e.pageY < btn_y || e.pageX < btn_x || e.pageX > btn_x + 60) {
        close_tab_option();
    }
}


function check(){
    console.log('checked')
}

function close_tab_option(){
    // Clear all children
    while (floating_options.firstChild) {
            
        // Remove all child
        floating_options.removeChild(floating_options.firstChild);
    }
    floating_options.style.display = 'none';
}

function open_side_feature_options(){
    side_feature_op_flag = !side_feature_op_flag;

    if (side_feature_op_flag == true) {
        
        feature_options.style.display = 'inline-block';
    
    }
    else {
        
        feature_options.style.display = 'none';
    
    }
}

function open_side_company_options(){
    side_company_op_flag = !side_company_op_flag;
    if (side_company_op_flag == true) {
        company_options.style.display = 'inline-block';
    }
    else {
        company_options.style.display = 'none';
    }
}

// Event listener

menu_button.addEventListener('click', open_menu);

menu_close.addEventListener('click', close_menu);

side_nav.addEventListener('click', close_menu);

feature_btn.addEventListener('mouseover', open_feature_options);

company_btn.addEventListener('mouseover', open_feature_options);

feature_btn.addEventListener('mouseleave', close_option);

company_btn.addEventListener('mouseleave', close_option);

floating_options.addEventListener('mouseover', check);

floating_options.addEventListener('mouseleave', close_tab_option);

//--------------------------------------------------------------------

side_feature_btn.addEventListener('click', open_side_feature_options);

side_company_btn.addEventListener('click', open_side_company_options);

side_nav_inner.addEventListener('click', (e)=>e.stopPropagation())
