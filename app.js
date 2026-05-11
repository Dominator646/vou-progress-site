import { createClient }

from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl =
"sb_publishable_mdFgb8jLvqq_EWASh7koxw_dftx3lfd";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bndneWFvb2pwdXZnZG13ZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0OTE2MDIsImV4cCI6MjA5NDA2NzYwMn0.TT9d50p3BVLFJ7LeUzsYdcpBO-7dXoV4fxkJnvlx-XU";
const supabase =
createClient(
    supabaseUrl,
    supabaseKey
);
const fill =
document.getElementById("fill");
const percent =
document.getElementById("percent");
const title =
document.getElementById("title");
const almost =
document.getElementById("almost");
async function loadData(){
    const { data } =
    await supabase
    .from("site_data")
    .select("*")
    .eq("id",1)
    .single();
    updateUI(data);
}
function updateUI(data){
    fill.style.width =
    data.progress + "%";
    percent.innerText =
    title.innerText =
    data.title;
    if(data.progress >= 90){
        almost.style.display =
        "block";
    }else{
        "none";
    }
supabase
.channel("site_data_changes")
.on(
"postgres_changes",
{
event:"UPDATE",
schema:"public",
table:"site_data"
},
(payload)=>{
    updateUI(
        payload.new
    );
})
.subscribe();
loadData();
setTimeout(()=>{
    document.getElementById(
        "loading"
    ).style.display = "none";
},1500);
