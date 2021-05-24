<template>
  <div class="layout">       
    <header class="layout__row layout__row_header">
      <div id="headerButtons" class="container box">
        <a class="a-with-svg" @click="homePressed" href="#">
          <svg width="55" height="18" viewBox="0 0 55 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.264 0.199999C9.752 0.199999 11.04 0.447999 12.128 0.943999C13.232 1.44 14.08 2.144 14.672 3.056C15.264 3.968 15.56 5.048 15.56 6.296C15.56 7.528 15.264 8.608 14.672 9.536C14.08 10.448 13.232 11.152 12.128 11.648C11.04 12.128 9.752 12.368 8.264 12.368H4.88V17H0.992V0.199999H8.264ZM8.048 9.2C9.216 9.2 10.104 8.952 10.712 8.456C11.32 7.944 11.624 7.224 11.624 6.296C11.624 5.352 11.32 4.632 10.712 4.136C10.104 3.624 9.216 3.368 8.048 3.368H4.88V9.2H8.048ZM30.6963 10.592C30.6963 10.64 30.6723 10.976 30.6243 11.6H20.8563C21.0323 12.4 21.4483 13.032 22.1043 13.496C22.7603 13.96 23.5763 14.192 24.5523 14.192C25.2243 14.192 25.8163 14.096 26.3283 13.904C26.8563 13.696 27.3443 13.376 27.7923 12.944L29.7843 15.104C28.5683 16.496 26.7923 17.192 24.4563 17.192C23.0003 17.192 21.7123 16.912 20.5923 16.352C19.4723 15.776 18.6083 14.984 18.0003 13.976C17.3923 12.968 17.0883 11.824 17.0883 10.544C17.0883 9.28 17.3843 8.144 17.9763 7.136C18.5843 6.112 19.4083 5.32 20.4483 4.76C21.5043 4.184 22.6803 3.896 23.9763 3.896C25.2403 3.896 26.3843 4.168 27.4083 4.712C28.4323 5.256 29.2323 6.04 29.8083 7.064C30.4003 8.072 30.6963 9.248 30.6963 10.592ZM24.0003 6.728C23.1523 6.728 22.4403 6.968 21.8643 7.448C21.2883 7.928 20.9363 8.584 20.8083 9.416H27.1683C27.0403 8.6 26.6883 7.952 26.1123 7.472C25.5363 6.976 24.8323 6.728 24.0003 6.728ZM41.5169 16.376C41.1489 16.648 40.6929 16.856 40.1489 17C39.6209 17.128 39.0609 17.192 38.4689 17.192C36.9329 17.192 35.7409 16.8 34.8929 16.016C34.0609 15.232 33.6449 14.08 33.6449 12.56V7.256H31.6529V4.376H33.6449V1.232H37.3889V4.376H40.6049V7.256H37.3889V12.512C37.3889 13.056 37.5249 13.48 37.7969 13.784C38.0849 14.072 38.4849 14.216 38.9969 14.216C39.5889 14.216 40.0929 14.056 40.5089 13.736L41.5169 16.376ZM47.9626 17.192C46.8906 17.192 45.8426 17.064 44.8186 16.808C43.7946 16.536 42.9786 16.2 42.3706 15.8L43.6186 13.112C44.1946 13.48 44.8906 13.784 45.7066 14.024C46.5226 14.248 47.3226 14.36 48.1066 14.36C49.6906 14.36 50.4826 13.968 50.4826 13.184C50.4826 12.816 50.2666 12.552 49.8346 12.392C49.4026 12.232 48.7386 12.096 47.8426 11.984C46.7866 11.824 45.9146 11.64 45.2266 11.432C44.5386 11.224 43.9386 10.856 43.4266 10.328C42.9306 9.8 42.6826 9.048 42.6826 8.072C42.6826 7.256 42.9146 6.536 43.3786 5.912C43.8586 5.272 44.5466 4.776 45.4426 4.424C46.3546 4.072 47.4266 3.896 48.6586 3.896C49.5706 3.896 50.4746 4 51.3706 4.208C52.2826 4.4 53.0346 4.672 53.6266 5.024L52.3786 7.688C51.2426 7.048 50.0026 6.728 48.6586 6.728C47.8586 6.728 47.2586 6.84 46.8586 7.064C46.4586 7.288 46.2586 7.576 46.2586 7.928C46.2586 8.328 46.4746 8.608 46.9066 8.768C47.3386 8.928 48.0266 9.08 48.9706 9.224C50.0266 9.4 50.8906 9.592 51.5626 9.8C52.2346 9.992 52.8186 10.352 53.3146 10.88C53.8106 11.408 54.0586 12.144 54.0586 13.088C54.0586 13.888 53.8186 14.6 53.3386 15.224C52.8586 15.848 52.1546 16.336 51.2266 16.688C50.3146 17.024 49.2266 17.192 47.9626 17.192Z" fill="white" />
          </svg>
        </a>
        <!--<a class="a-with-svg header-catalog" href="#">
          <svg width="123" height="29" viewBox="0 0 123 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="121" height="27" rx="4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M44.354 14.456H41.726V20H39.962V7.4H41.726V12.872H44.39L48.35 7.4H50.276L45.776 13.502L50.492 20H48.44L44.354 14.456ZM55.574 10.37C56.894 10.37 57.902 10.694 58.598 11.342C59.306 11.99 59.66 12.956 59.66 14.24V20H58.022V18.74C57.734 19.184 57.32 19.526 56.78 19.766C56.252 19.994 55.622 20.108 54.89 20.108C53.822 20.108 52.964 19.85 52.316 19.334C51.68 18.818 51.362 18.14 51.362 17.3C51.362 16.46 51.668 15.788 52.28 15.284C52.892 14.768 53.864 14.51 55.196 14.51H57.932V14.168C57.932 13.424 57.716 12.854 57.284 12.458C56.852 12.062 56.216 11.864 55.376 11.864C54.812 11.864 54.26 11.96 53.72 12.152C53.18 12.332 52.724 12.578 52.352 12.89L51.632 11.594C52.124 11.198 52.712 10.898 53.396 10.694C54.08 10.478 54.806 10.37 55.574 10.37ZM55.178 18.776C55.838 18.776 56.408 18.632 56.888 18.344C57.368 18.044 57.716 17.624 57.932 17.084V15.752H55.268C53.804 15.752 53.072 16.244 53.072 17.228C53.072 17.708 53.258 18.086 53.63 18.362C54.002 18.638 54.518 18.776 55.178 18.776ZM69.8817 11.972H66.3897V20H64.6617V11.972H61.1697V10.46H69.8817V11.972ZM75.0506 10.37C76.3706 10.37 77.3786 10.694 78.0746 11.342C78.7826 11.99 79.1366 12.956 79.1366 14.24V20H77.4986V18.74C77.2106 19.184 76.7966 19.526 76.2566 19.766C75.7286 19.994 75.0986 20.108 74.3666 20.108C73.2986 20.108 72.4406 19.85 71.7926 19.334C71.1566 18.818 70.8386 18.14 70.8386 17.3C70.8386 16.46 71.1446 15.788 71.7566 15.284C72.3686 14.768 73.3406 14.51 74.6726 14.51H77.4086V14.168C77.4086 13.424 77.1926 12.854 76.7606 12.458C76.3286 12.062 75.6926 11.864 74.8526 11.864C74.2886 11.864 73.7366 11.96 73.1966 12.152C72.6566 12.332 72.2006 12.578 71.8286 12.89L71.1086 11.594C71.6006 11.198 72.1886 10.898 72.8726 10.694C73.5566 10.478 74.2826 10.37 75.0506 10.37ZM74.6546 18.776C75.3146 18.776 75.8846 18.632 76.3646 18.344C76.8446 18.044 77.1926 17.624 77.4086 17.084V15.752H74.7446C73.2806 15.752 72.5486 16.244 72.5486 17.228C72.5486 17.708 72.7346 18.086 73.1066 18.362C73.4786 18.638 73.9946 18.776 74.6546 18.776ZM90.4382 10.46V20H88.7102V11.972H84.6062L84.4982 14.096C84.4382 15.38 84.3242 16.454 84.1562 17.318C83.9882 18.17 83.7122 18.854 83.3282 19.37C82.9442 19.886 82.4102 20.144 81.7262 20.144C81.4142 20.144 81.0602 20.09 80.6642 19.982L80.7722 18.524C80.9282 18.56 81.0722 18.578 81.2042 18.578C81.6842 18.578 82.0442 18.368 82.2842 17.948C82.5242 17.528 82.6802 17.03 82.7522 16.454C82.8242 15.878 82.8902 15.056 82.9502 13.988L83.1122 10.46H90.4382ZM97.8655 20.108C96.9175 20.108 96.0655 19.898 95.3095 19.478C94.5535 19.058 93.9595 18.482 93.5275 17.75C93.1075 17.006 92.8975 16.166 92.8975 15.23C92.8975 14.294 93.1075 13.46 93.5275 12.728C93.9595 11.984 94.5535 11.408 95.3095 11C96.0655 10.58 96.9175 10.37 97.8655 10.37C98.8135 10.37 99.6595 10.58 100.403 11C101.159 11.408 101.747 11.984 102.167 12.728C102.599 13.46 102.815 14.294 102.815 15.23C102.815 16.166 102.599 17.006 102.167 17.75C101.747 18.482 101.159 19.058 100.403 19.478C99.6595 19.898 98.8135 20.108 97.8655 20.108ZM97.8655 18.596C98.4775 18.596 99.0235 18.458 99.5035 18.182C99.9955 17.894 100.379 17.498 100.655 16.994C100.931 16.478 101.069 15.89 101.069 15.23C101.069 14.57 100.931 13.988 100.655 13.484C100.379 12.968 99.9955 12.572 99.5035 12.296C99.0235 12.02 98.4775 11.882 97.8655 11.882C97.2535 11.882 96.7015 12.02 96.2095 12.296C95.7295 12.572 95.3455 12.968 95.0575 13.484C94.7815 13.988 94.6435 14.57 94.6435 15.23C94.6435 15.89 94.7815 16.478 95.0575 16.994C95.3455 17.498 95.7295 17.894 96.2095 18.182C96.7015 18.458 97.2535 18.596 97.8655 18.596ZM112.331 11.972H107.039V20H105.311V10.46H112.331V11.972Z" fill="white" />
            <path d="M12 14H30" stroke="white" stroke-width="2" />
            <path d="M12 9H30" stroke="white" stroke-width="2" />
            <path d="M12 19H30" stroke="white" stroke-width="2" />
          </svg>
        </a>-->
        <div class="header-search box">
          <input type="text" placeholder="Поиск"
            @input="inputSearch"           
          >
          <a class="a-with-svg" href="#"
            @click="findSearch" 
          >
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.6457 26.9381L20.3989 18.6913C21.9963 16.7181 22.9581 14.2108 22.9581 11.48C22.9581 5.15083 17.8082 0.000946045 11.479 0.000946045C5.14983 0.000946045 0 5.15077 0 11.48C0 17.8092 5.14989 22.959 11.4791 22.959C14.2099 22.959 16.7171 21.9972 18.6903 20.3998L26.9371 28.6466C27.1727 28.8822 27.482 29.0007 27.7914 29.0007C28.1008 29.0007 28.4101 28.8822 28.6457 28.6466C29.1182 28.1742 29.1182 27.4105 28.6457 26.9381ZM11.4791 20.5424C6.48144 20.5424 2.41666 16.4776 2.41666 11.48C2.41666 6.48233 6.48144 2.41755 11.4791 2.41755C16.4767 2.41755 20.5415 6.48233 20.5415 11.48C20.5415 16.4776 16.4767 20.5424 11.4791 20.5424Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </header>  
    <!--<router-view
      @cardPressed="cardPressed"
      @catalogPressed="catalogPressed"
      :petInfo='pet'
      :kindOfPets='kindOfPets'
      :breedOfPets='breedOfPets'
      ></router-view>  -->
    <navigation-chain
      v-if="currentTab !== 'homeTab'"
      @homePressed="homePressed"
      @catalogPressed="catalogPressed"
      :kindOfPets='kindOfPets'
      :breedOfPets='breedOfPets'
    ></navigation-chain>
    <component       
      @catalogPressed="catalogPressed"
      @cardPressed="cardPressed"
      :kindOfPets='kindOfPets'
      :breedOfPets='breedOfPets'
      :petInfo='pet'
      :pets='pets'
      :findedPets="findedPets"
      :is="currentTab"> 
    </component>
    <footer class="layout__row layout__row_footer">
      <div class="container box">
        <span class="footer-span">Pets, 2021</span>
      </div>
    </footer>
  </div>
</template>

<script>
import homeTab from './components/homeTab'
import catalogTab from './components/catalogTab'
import petTab from './components/petTab'
import navigationChain from './components/navigationChain'
import PetsImport from './api/PetsImport.js'

export default {
  name: 'App',
  components: {
    homeTab,
    catalogTab,
    petTab,
    navigationChain
  },
  data() {
    return {
      currentTab: 'homeTab',
      kindOfPets: '',
      breedOfPets: '',
      pet: {},
      pets: [],
      findedPets: [],
			error: '',
      search: ''
    }
  },
  methods: {
    homePressed() {
      this.kindOfPets = '',
      this.breedOfPets = '',
      this.currentTab = 'homeTab'
    },
    catalogPressed(catalog) {  
      this.kindOfPets = catalog.kind, 
      this.breedOfPets = catalog.breed, 
      this.findPets()
      this.currentTab = 'catalogTab'
    },
    cardPressed(card) {
      this.pet = card,
      this.kindOfPets = card.kind, 
      this.breedOfPets = card.breed, 
      this.currentTab = "petTab"
    },
    inputSearch(event) {
      this.search = event.target.value
    },
    findPets() {
        this.findedPets = this.pets.filter(pet => {
          if (this.breedOfPets === '' && pet.kind === this.kindOfPets) return true;
          if (pet.breed === this.breedOfPets) return true;
          return false;
        })
    },
    findSearch(){      
      this.search = this.search.toLowerCase()
      this.findedPets = this.pets.filter(pet => {
				if (pet.breed.toLowerCase() === this.search) return true;
				return false;
			})
      if (this.findedPets.length > 0 ) {
        this.kindOfPets = this.findedPets[0].kind
        this.breedOfPets = this.findedPets[0].breed
        this.currentTab = 'catalogTab'
        return
      }

      this.findedPets = this.pets.filter(pet => {
				if (pet.kind.toLowerCase() === this.search) return true;
				return false;
			})
      if (this.findedPets.length > 0 ) {
        this.kindOfPets = this.findedPets[0].kind     
        this.breedOfPets = ''
        this.currentTab = 'catalogTab'
        return
      }

      this.findedPets = this.pets.filter(pet => {
        if (pet.name.toLowerCase() === this.search) return true;
        return false;
			})
      if (this.findedPets.length > 0 ) {    
        this.kindOfPets = ''
        this.breedOfPets = ''    
        this.currentTab = 'catalogTab'
        return
      }

      this.kindOfPets = ''
      this.breedOfPets = ''
      this.findedPets = []
      this.currentTab = 'catalogTab'
    },
    print(event) {
      console.log(event)
    }
  },
	async created() {
		try {
			this.pets = await PetsImport.getPets()
		} catch (error) {
			this.error = error.message
		}
	}
}
</script>

<style scorped>
  @import './assets/css/style.css';
  @import './assets/css/reset.css';
</style>