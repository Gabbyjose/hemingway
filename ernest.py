import markovify
import os
import sys
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
hem_file = os.path.join(THIS_FOLDER, 'hemingway.txt')
faulk_file = os.path.join(THIS_FOLDER, 'faulkner.txt')
fitz_file = os.path.join(THIS_FOLDER, 'fitzgerald.txt')

with open(hem_file) as f:
    ernest = f.read()

with open(faulk_file) as f:
    faulkner = f.read()

with open(fitz_file) as f:
    fitzgerald = f.read()

hem_model = markovify.Text(ernest)
fitz_model = markovify.Text(fitzgerald)
faulkner_model = markovify.Text(faulkner)

if sys.argv[1] == 'Hemingway':
    hem_text = hem_model.make_sentence()
    print(hem_text)

if sys.argv[1] == 'Faulkner':
    faulk_text = faulkner_model.make_sentence()
    print(faulk_text)

if sys.argv[1] == 'Fitzgerald':
    fitz_text = fitz_model.make_sentence()
    print(fitz_text)

if sys.argv[1] == 'HemingwayFaulkner':
    hf_model = markovify.combine([hem_model, faulkner_model])
    hf_text = hf_model.make_sentence()
    print(hf_text)
