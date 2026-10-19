import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Badge, Card, MD3LightTheme, PaperProvider, Searchbar, SegmentedButtons, useTheme, Text, Chip, ProgressBar, Button, Surface, List, Divider, TextInput, FAB } from 'react-native-paper'
import { Row } from 'react-bootstrap';
import { temaClaro } from './themes/TemaClaro';
import { temaOscuro } from './themes/TemaOscuro';

export function getRootComponent() {
  // Detecta el tema del dispositivo ('dark' o 'light')
  const colorScheme = useColorScheme();
  
  // Si es 'dark' usa temaOscuro, de lo contrario usa temaClaro
  const temaActual = colorScheme === 'dark' ? temaOscuro : temaClaro;

  return (
    <PaperProvider theme={temaActual}>
      <App />
    </PaperProvider>
  );
}

export default function App() {
  const tema = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: tema.colors.background }}>
      <Appbar.Header elevated={true} style={{ backgroundColor: tema.colors.primary, width: '100%' }}>
        <Appbar.Action icon="menu" iconColor={tema.colors.onPrimary}></Appbar.Action>
        <Appbar.Content title="Excursiones de Roberto" titleStyle={{ color: tema.colors.onPrimary, fontWeight: 'bold' }} />
        <Appbar.Action icon={"bell-outline"} iconColor={tema.colors.onPrimary} />
        <Avatar.Icon icon="account" size={36} style={{ marginRight: 12, backgroundColor: tema.colors.secondary }} />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 16, paddingBottom: 100, gap: 16 }}>
        <Searchbar style={{ backgroundColor: tema.colors.background, marginTop: 8, borderRadius: 16, borderWidth: 1, borderColor: tema.colors.outline }}
          placeholder="Buscar ofertas" iconColor={tema.colors.onSurface} placeholderTextColor={tema.colors.onSurfaceVariant}
          inputStyle={{ color: tema.colors.onSurface }} />
        <SegmentedButtons value="ofertas" style={{ marginTop: 8 }} buttons={[{ value: "home", icon: "home-outline", label: "inicio" },
        { value: "ofertas", icon: "chart-line", label: "Ofertas" },
        { value: "settings", icon: "cog-outline", label: "Ajustes" }]} />
        <Card mode='elevated' elevation={2} style={{ marginTop: 8, backgroundColor: tema.colors.surface }}>
          <Card.Cover
            source={require("./assets/fondo5.jpg")}
          />
          <Card.Title title='Visita la alhambra' subtitle="Granada, España"
            left={() => <Avatar.Icon size={42} icon="castle" style={{ backgroundColor: tema.colors.primaryContainer }} />}
            right={(props) => (
              <Badge {...props} style={{ marginRight: 16 }}>
                Alta demanda
              </Badge>)} />
          <Card.Content>
            <Text variant="bodyMedium">La Alhambra es un conjunto monumental de origen nazari situado en Granada, reconocido
              por su impresionante arquitectura, jardines y palacios</Text>
              <View style={styles.fila}>
                <Chip icon="check-circle">Activo</Chip>
                <Chip icon="calendar">Fechas libres</Chip>
                <Chip icon="star-outline">Favoritos</Chip>
              </View>
              <Text variant="labelMedium" style={{marginTop:20}}>Plazas libres</Text>
              <ProgressBar progress={0.72} color={tema.colors.primary} style={{marginTop:8}}></ProgressBar>
              <Card.Actions>
                <Button>Cancelar</Button>
                <Button>Abrir</Button>
              </Card.Actions>
          </Card.Content>
        </Card>
        <Surface elevation={2} style={{marginTop:8, backgroundColor:tema.colors.surface, borderRadius:tema.roundness}}>
          <List.Item title="Notificaciones" description="Recibir avisos de nuevas ofertas"
          left={(props) => <List.Icon {...props} icon="bell-outline"/>}>
          </List.Item>
          <Divider></Divider>
          <List.Item title="Tema" description="Cambiar el tema de coolores de la app"
          left={() => <List.Icon icon="palette-outline"/>}>
          </List.Item>
        </Surface>
        <TextInput mode="outlined" label="Presupuesto disponible" style={{marginTop:8}}
        left={<TextInput.Icon icon="cash"/>}
        right={<TextInput.Icon icon="currency-eur"/>}/>
        <Button mode="contained-tonal" icon="tag-outline">Mostrar ofertas</Button>
      </View>
      <Text>Apfgdgfdfgdfgdp</Text>
      </ScrollView>
      {/* Usamos corchetes [] dentro de las llaves del estilo para combinar tu objeto de estilos de la hoja (styles.fab) con el nuevo color de fondo.  */}
      <FAB icon="plus" label="Nuevo" color={tema.colors.primary} style={[styles.fab, {backgroundColor:tema.colors.onPrimary}]}></FAB>  
    </View>
  )
}

const styles = StyleSheet.create({
  fila:{
    flexDirection: "row",
    gap: 8,
    marginTop: 16
  },
  fab:{
    position: "absolute",
    bottom:16,
    right:16
  }
})
