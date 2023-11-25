from fastapi import FastAPI
from fastapi.responses import HTMLResponse
import folium
import json

app= FastAPI()

@app.get("/rota", response_class=HTMLResponse)
async def display_map(fruta, lat_org, long_org):
    
    with open('base.json', 'r') as f:
        banco = json.load(f)
        
    folium_map = folium.Map(location=[lat_org, long_org], zoom_start=13)
    
    folium.Marker(
                location=[lat_org, long_org],
                icon=folium.Icon(icon='user', color='red'),
                popup=folium.Popup("<p style:30px>Voce esta aqui</p>", min_width=80, max_width=80)
            ).add_to(folium_map)
   
    for i in banco:
        if fruta in banco[i]["frutas"]:
            prod = ''

            for p in banco[i]["frutas"]:
                prod += p + ', '
                    
            prod = prod[:-2]
                
            iframe = folium.IFrame(f'''
                                        <p style:40px>  
                                            Endereco: {str(banco[i]['endereco'])} <br> 
                                            Produtos: {prod}
                                            <h3>
                                                Contato:
                                            </h3>
                                            Email: {str(banco[i]['email'])} <br>
                                            Numero: {str(banco[i]['numero'])}
                                        </p>
                                    ''')

            
            popup = folium.Popup(iframe, min_width=350, max_width=400)
                
            folium.Marker(
                location=[banco[i]["cordenadas"][0], banco[i]["cordenadas"][1]],
                icon=folium.Icon(icon='map-marker', color='blue'),
                popup=popup
            ).add_to(folium_map)
                
            map_response= folium_map.get_root().render() # renderiza o mapa
    # mapa = folium_map.save("mapa_cascavel.html") 
  
    #RETORNA O JSON DA REQUISÇÃO DE ROTAS DA OSRM
    return HTMLResponse(content=map_response, status_code=200)