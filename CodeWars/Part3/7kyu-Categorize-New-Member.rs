// First Sollution
// fn open_or_senior(data: Vec<(i32, i32)>) -> Vec<String> {
//     data.into_iter().map(|d| if d.0>=55 && d.1>7 {String::from("Senior")} else {String::from("Open")}).collect::<Vec<String>>()
//   }

fn open_or_senior(data: Vec<(i32, i32)>) -> Vec<String> {
    data.into_iter()
      .map(|(age, h)|{
          if age>=55 && h>7 { // or String::from("Senior")
              "Senior"
          } else {    // and String::from("Open")
              "Open"    
          }
          .to_string()    // Then this is no need
      })
      .collect::<Vec<String>>()
  }

// Sample Tests:
// Add your tests here.
// See https://doc.rust-lang.org/stable/rust-by-example/testing/unit_testing.html
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn returns_expected() {
        assert_eq!(open_or_senior(vec![(45, 12), (55,21), (19, -2), (104, 20)]), vec!["Open", "Senior", "Open", "Senior"]);
        assert_eq!(open_or_senior(vec![(3, 12), (55,1), (91, -2), (54, 23)]), vec!["Open", "Open", "Open", "Open"]);
    }
}