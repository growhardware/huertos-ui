<script>
// import { logout, api, lIn} from "../stores/userstore";
import { lIn} from "../stores/userstore";
import { logout} from "../services/session-service";
import { api} from "../stores/api";

    const handleLogoutResponse = (body, JWR) => {
      if(body==='OK') {
		  console.log('Successfully logged out', JWR);
        lIn.set(false);
        window.location.href = '/';
          }
          else {console.log(body);}
    }

</script>
<button  type="button" on:click={() => { logout(api, handleLogoutResponse)}} class="float-right shadow bg-slate-200	 hover:bg-slate-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    sign OUT
</button>