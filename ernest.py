import sys
import markovify
import pickle

if sys.argv[1] == 'Hemingway':
    hem_model = pickle.load(open("save.hem","rb"))
    hem_text = hem_model.make_sentence()
    print(hem_text)

if sys.argv[1] == 'Faulkner':
    faulkner_model = pickle.load(open("save.faulk","rb"))
    faulk_text = faulkner_model.make_sentence()
    print(faulk_text)

if sys.argv[1] == 'Fitzgerald':
    fitz_model = pickle.load(open("save.fitz","rb"))
    fitz_text = fitz_model.make_sentence()
    print(fitz_text)

if sys.argv[1] == 'HemingwayFaulkner':
    hf_model = pickle.load(open("save.hf","rb"))
    hf_text = hf_model.make_sentence()
    print(hf_text)

if sys.argv[1] == 'HemingwayShakespeare':
    hs_model = pickle.load(open("save.hs","rb"))
    hs_text = hs_model.make_sentence()
    print(hs_text)
