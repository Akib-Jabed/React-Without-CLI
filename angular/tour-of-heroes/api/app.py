from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)

HEROES = [
  { 'id': 12, 'name': 'Dr. Nice' },
  { 'id': 13, 'name': 'Bombasto' },
  { 'id': 14, 'name': 'Celeritas' },
  { 'id': 15, 'name': 'Magneta' },
  { 'id': 16, 'name': 'RubberMan' },
  { 'id': 17, 'name': 'Dynama' },
  { 'id': 18, 'name': 'Dr. IQ' },
  { 'id': 19, 'name': 'Magma' },
  { 'id': 20, 'name': 'Tornado' },
]

@app.route('/heroes', methods=['GET'])
def heroes():
  return jsonify(HEROES), 200


@app.route('/heroes/<id>', methods=['GET'])
def hero(id):
  for hero in HEROES:
    if hero['id'] == int(id):
      return jsonify(hero), 200

  return jsonify({'message': 'Hero not found'}), 404

if __name__ == '__main__':
  app.run(port=5000)
