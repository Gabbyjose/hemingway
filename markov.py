import markovify
import os
import sys
import pickle
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
hem_file = os.path.join(THIS_FOLDER, 'hemingway.txt')
faulk_file = os.path.join(THIS_FOLDER, 'faulkner.txt')
shake_file = os.path.join(THIS_FOLDER, 'shakespeare.txt')
austen_file = os.path.join(THIS_FOLDER, 'austen.txt')

with open(hem_file) as f:
    ernest = f.read()

with open(faulk_file) as f:
    faulkner = f.read()

with open(shake_file) as f:
    shakespeare = f.read()

with open(austen_file) as f:
    austen = f.read()

hem_model = markovify.Text(ernest, state_size=3)
pickle.dump(hem_model, open( "save.hem", "wb" ))

faulkner_model = markovify.Text(faulkner, state_size=3)

shake_model = markovify.Text(shakespeare, state_size=3)

austen_model = markovify.Text(austen, state_size=3)

ha_model = markovify.combine([austen_model, hem_model])
pickle.dump(ha_model, open("save.ha", "wb"))

hs_model = markovify.combine([hem_model, shake_model])
pickle.dump(hs_model, open( "save.hs", "wb" ))

hf_model = markovify.combine([hem_model, faulkner_model])
pickle.dump(hf_model, open( "save.hf", "wb" ))

print("done")
