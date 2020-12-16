use std::string::String;

fn are_you_playing_banjo(name: &str) -> String {
    match &name[0 .. 1] {
        "R" | "r" => format!("{} plays banjo", name),
        _ =>         format!("{} does not play banjo", name)
    }
}

// Sample Tests:

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_are_you_playing_banjo() {
        assert_eq!(are_you_playing_banjo("Martin"), "Martin does not play banjo");
        assert_eq!(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
    }
}
