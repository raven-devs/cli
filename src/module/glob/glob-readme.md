# Glob Primer

`*` Matches 0 or more characters in a single path portion.

`?` Matches 1 character.

`[...]` Matches a range of characters.

`[!...]` Matches any character not in the range.

`!(pattern|pattern|pattern)` Matches anything that does not match any of the patterns provided.

`?(pattern|pattern|pattern)` Matches zero or one occurrence of the patterns provided.

Example: `a?b` will match `b`, `ab`. `aab` is not possible.

`*(pattern|pattern|pattern)` Matches zero or more occurrences of the patterns provided.

Example: `a*b` will match `b`, `ab`, `aab`, `aaab`, and so on. Just `b` is possible.

`+(pattern|pattern|pattern)` Matches one or more occurrences of the patterns provided.

Example: `a+b` will match `ab`, `aab`, `aaab`, `aaaab`, and so on. Just `b` is not possible.

`*(a|b|c)` Matches zero or more occurrences of the patterns provided.

`@(pattern|pat*|pat?erN)` Matches exactly one of the patterns provided.

`**` Matches zero or more directories and subdirectories searching for matches.

`{pattern,pattern,pattern}` Matches any of the patterns provided.

Example: `./src/**/*.{js,jsx,ts,tsx}` will match any JS or JSX or TS or TSX files in any directory inside the root `src` directory.
