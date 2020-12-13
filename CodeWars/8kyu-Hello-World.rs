use std::string::String;

fn greet() -> String {
    return String::from("hello world!");
}

// Sample Tests:
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_greets_the_world() {
        assert_eq!(greet(), "hello world!", "should return the correct message");
    }
}