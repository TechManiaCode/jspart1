use std::str;

fn get_middle(s:&str) -> &str {
    let len: usize = s.len() as usize;
    let from = (len -1) / 2;
    let to = (len / 2) + 1;
    &s[from .. to]
}

// Sample Tests:
#[test]
fn example_tests() {
  assert_eq!(get_middle("test"),"es");
  assert_eq!(get_middle("testing"),"t");
  assert_eq!(get_middle("middle"),"dd");
  assert_eq!(get_middle("A"),"A");
  assert_eq!(get_middle("of"),"of");
}