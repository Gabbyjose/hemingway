import markovify
import os
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, 'hemingway.txt')

with open(my_file) as f:
    ernest = f.read()

hem_model = markovify.Text(ernest)
hem_text = hem_model.make_sentence()

# Print five randomly-generated sentences
print(hem_text)
