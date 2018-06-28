import markovify
import os
import sys
import pickle
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
hem_file = os.path.join(THIS_FOLDER, 'hemingway.txt')
faulk_file = os.path.join(THIS_FOLDER, 'faulkner.txt')
fitz_file = os.path.join(THIS_FOLDER, 'fitzgerald.txt')
shake_file = os.path.join(THIS_FOLDER, 'shakespeare.txt')

with open(hem_file) as f:
    ernest = f.read()

with open(faulk_file) as f:
    faulkner = f.read()

with open(fitz_file) as f:
    fitzgerald = f.read()

with open(shake_file) as f:
    shakespeare = f.read()

print("Hello world")

hem_model = markovify.Text(ernest, state_size=3)
pickle.dump(hem_model, open( "save.hem", "wb" ))

faulkner_model = markovify.Text(faulkner, state_size=3)
pickle.dump(faulkner_model, open( "save.faulk", "wb" ))

fitz_model = markovify.Text(fitzgerald, state_size=3)
pickle.dump(fitz_model, open( "save.fitz", "wb" ))

shake_model = markovify.Text(shakespeare, state_size=3)
pickle.dump(shake_model, open( "save.shake", "wb" ))

hs_model = markovify.combine([hem_model, shake_model])
pickle.dump(hs_model, open( "save.hs", "wb" ))

hf_model = markovify.combine([hem_model, faulkner_model])
pickle.dump(hf_model, open( "save.hf", "wb" ))
